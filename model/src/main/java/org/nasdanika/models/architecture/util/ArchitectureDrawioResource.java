package org.nasdanika.models.architecture.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Map;
import java.util.Map.Entry;
import java.util.function.Function;
import java.util.function.Supplier;

import org.eclipse.emf.common.util.URI;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.resource.URIConverter;
import org.eclipse.emf.ecore.resource.impl.ResourceImpl;
import org.nasdanika.common.NullProgressMonitor;
import org.nasdanika.common.ProgressMonitor;
import org.nasdanika.common.Transformer;
import org.nasdanika.drawio.emf.DrawioResource;
import org.nasdanika.drawio.model.ModelFactory;
import org.nasdanika.drawio.model.util.AbstractDrawioFactory;
import org.nasdanika.persistence.Marker;

/**
 * Loads Drawio model using {@link DrawioResource} and then transforms it to the architecture model.
 */
public class ArchitectureDrawioResource extends ResourceImpl {
		
	protected Function<URI,EObject> uriResolver;
	
	public ArchitectureDrawioResource(Function<URI,EObject> uriResolver) {
		super();
		this.uriResolver = uriResolver;
	}

	public ArchitectureDrawioResource(URI uri, Function<URI,EObject> uriResolver) {
		super(uri);
		this.uriResolver = uriResolver;
	}

	@Override
	protected void doLoad(InputStream inputStream, Map<?, ?> options) throws IOException {
		Resource diagramResource = new DrawioResource(getURI()) {

			@Override
			protected Function<Marker, org.nasdanika.ncore.Marker> getMarkerFactory() {
				return ArchitectureDrawioResource.this.getMarkerFactory();
			}

			@Override
			protected ModelFactory getFactory() {
				return ArchitectureDrawioResource.this.getDrawioFactory();
			}
			
			@Override
			protected URIConverter getURIConverter() {
				return ArchitectureDrawioResource.this.getURIConverter();
			}
			
			@Override
			protected String getProperty(String name) {
				return ArchitectureDrawioResource.this.getProperty(name);
			}
			
		};
		
		diagramResource.load(inputStream, options);
		
		ArchitectureDrawioFactory architectureDrawioFactory = new ArchitectureDrawioFactory(getResourceSet()) {

			@Override
			protected EObject getByRefId(EObject eObj, String refId, int pass, Map<EObject, EObject> registry) {				
				return ArchitectureDrawioResource.this.getByRefId(eObj, getBaseURI(eObj), refId, pass, registry);
			}
			
			@Override
			protected boolean isRefIdProxyURI() {
				return true;
			}
			
			@Override
			protected ClassLoader getClassLoader(EObject context) {
				Supplier<ClassLoader> lpcs = () -> {
					EObject logicalParent = getLogicalParent(context);
					if (logicalParent == null) {
						return null;
					}
					
					return getClassLoader(logicalParent);
				};
				return ArchitectureDrawioResource.this.getClassLoader(
						context,
						getBaseURI(context),
						lpcs);
			}
			
			@Override
			protected URI getAppBase() {
				return ArchitectureDrawioResource.this.getAppBase();
			}
			
			@Override
			protected void filterRepresentationElement(
					org.nasdanika.drawio.ModelElement representationElement, 
					EObject semanticElement, 
					Map<EObject, EObject> registry,
					ProgressMonitor progressMonitor) {
				super.filterRepresentationElement(representationElement, semanticElement, registry, progressMonitor);
				ArchitectureDrawioResource.this.filterRepresentationElement(representationElement, semanticElement, registry, progressMonitor);
			}
			
			@Override
			protected Iterable<Entry<String, Object>> getVariables(EObject context) {
				return ArchitectureDrawioResource.this.getVariables(context);
			}
			
			@Override
			protected String getProperty(String name) {
				return ArchitectureDrawioResource.this.getProperty(name);
			}
			
		};
		
		Transformer<EObject,EObject> architectureFactory = new Transformer<>(architectureDrawioFactory);
		Collection<EObject> diagramModelContents = new ArrayList<>();
		diagramResource.getAllContents().forEachRemaining(e -> {
			if (e instanceof org.nasdanika.drawio.model.Document
					|| e instanceof org.nasdanika.drawio.model.Page
					|| e instanceof org.nasdanika.drawio.model.ModelElement
					|| e instanceof org.nasdanika.drawio.model.Tag) {
				diagramModelContents.add(e);
			}
		});
		
		Map<EObject, EObject> architectureElements = architectureFactory.transform(diagramModelContents, false, getProgressMonitor());
		
		diagramResource.getContents().stream().map(architectureElements::get).forEach(getContents()::add);
	}

	protected String getProperty(String name) {
		return null;
	}

	protected ProgressMonitor getProgressMonitor() {
		return new NullProgressMonitor();
	}

	protected Function<Marker, org.nasdanika.ncore.Marker> getMarkerFactory() {
		return null;
	}

	protected ModelFactory getDrawioFactory() {
		return org.nasdanika.drawio.model.ModelFactory.eINSTANCE;
	}	
		
	protected EObject getByRefId(EObject eObj, URI baseURI, String refId, int pass, Map<EObject, EObject> registry) {
		if (uriResolver == null) {
			return null;
		}
		
		URI refURI = URI.createURI(refId);
		if(!getURI().isRelative()) {
			if (baseURI == null) {
				refURI = refURI.resolve(getURI());
			} else {
				refURI = refURI.resolve(baseURI);
			}
		}
		return uriResolver.apply(refURI);
	}
	
	protected ClassLoader getClassLoader(EObject context, URI baseURI, Supplier<ClassLoader> logicalParentClassLoaderSupplier) {
		return logicalParentClassLoaderSupplier == null ? Thread.currentThread().getContextClassLoader() : logicalParentClassLoaderSupplier.get();
	}	
	
	protected URI getAppBase() {
		return AbstractDrawioFactory.DEFAULT_APP_BASE;
	}
		
	/**
	 * Override to implement filtering of a representation element. 
	 * For example, if an element represents a processing unit, its background color or image can be modified depending on the load - red for overloaded, green for OK, grey for planned offline.  
	 * @param representationElement
	 * @param registry
	 * @param progressMonitor
	 */
	protected void filterRepresentationElement(
			org.nasdanika.drawio.ModelElement representationElement, 
			EObject semanticElement,
			Map<EObject, EObject> registry,
			ProgressMonitor progressMonitor) {
		
	}
		
	protected Iterable<Entry<String, Object>> getVariables(EObject context) {
		return Collections.emptySet();
	}

}
