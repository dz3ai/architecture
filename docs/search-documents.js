var searchDocuments = {"demo/internet-banking-system/r0/internet-banking-system/rh/api-application/index.html":{"path":"Internet Banking System/API Application","action-uuid":"944407dd-2ce0-4140-80f1-07306f31e657","title":"API Application","content":"The the above diagram is a Component diagram, which is used to &ldquo;decompose each container further to identify the major structural building blocks and their interactions&rdquo;. Mapping Surroundings -&gt; selectors Similar to the container diagram, diagram elements representing the surroundings of the &ldquo;API Application&rdquo; are mapped to semantic elements defined on the higher level diagrams using selectors. The system context diagram defines the surrounding nodes and this diagram references them. This is a selector of the &ldquo;Single-Page Application&rdquo;: getDocument().getModelElementById('single-page-application')\n The loading logic &ldquo;carries over&rdquo; tooltips from the System Context Diagram to this diagram. API Application The &ldquo;API Application&rdquo; container maps to the same semantic element as on the Container diagram because: The &ldquo;API Application&rdquo; element on the Container diagram links to this diagram page. The &ldquo;API Application&rdquo; element on this diagram has page-element property set to true. Semantic elements of the child elements of the &ldquo;API Application&rdquo; element are mapped to the elements reference and ordered with the right-down comparator: container:\n  self:\n    elements:\n      path: 1\n      comparator: right-down\n Components All components within the container except the &ldquo;Mainframe Banking System Facade&rdquo; are mapped to Nodes. The &ldquo;Mainframe Banking System Facade&rdquo; component is mapped to CompositeNode because it has sub-elements. It is linked to the &ldquo;Mainframe Banking System Facade Code&rdquo; page. As such, its semantic element is mapped to the &ldquo;Mainframe Banking System Facade Code&rdquo; page element as well allowing further mapping on that page. This diagram element defines base-uri property as %id%/. Because &ldquo;Placeholders&rdquo; is checked, %id%/ expands to mainframe-banking-system-facade/ during loading. doc-ref is set to readme.md, which in combination with base-uri of this element and its containing element resolves to api-appliction/mainframe-banking-system-facade/readme.md. Mainframe Banking System Stores all of the core banking information about customers, accounts, transactions, etc. E-mail System The internal Microsoft Exchange e-mail system. Database Stores user registration information, hashed authentication credentials, access logs, etc. Uses Sign In Controller Allows users to sign in to the Internet Banking System. Mainframe Banking System Facade A facade onto the mainframe banking system. Security Component Provides functionality related to signing in, changing passwords, etc. Uses Uses Reset Password Controller Allows users to reset their passwords with a single use URL. Uses Accounts Summary Controller Provides customers wiht a summary of their bank accounts. E-mail Component Sends e-mails to users. API Application Provides Internet banking functionality via a JSP/HTTPS API. Makes API calls to [JSON/HTTPS] Makes API calls to [JSON/HTTPS] Makes API calls to [JSON/HTTPS] Single-Page Application Provides all of the Internet banking functionality to customers via their web browser. Makes API calls to [JSON/HTTPS] Makes API calls to [JSON/HTTPS] Makes API calls to [JSON/HTTPS] Mobile App Provides a limited subset of the Internet banking functionality to customers via their mobile device. Reads from and writes to [SQL/TCP] Sends e-mail using Makes API calls to [XML/HTTPS] Mainframe Banking System Stores all of the core banking information about customers, accounts, transactions, etc. E-mail System The internal Microsoft Exchange e-mail system. Database Stores user registration information, hashed authentication credentials, access logs, etc. Uses Sign In Controller Allows users to sign in to the Internet Banking System. Mainframe Banking System Facade A facade onto the mainframe banking system. Security Component Provides functionality related to signing in, changing passwords, etc. Uses Uses Reset Password Controller Allows users to reset their passwords with a single use URL. Uses Accounts Summary Controller Provides customers wiht a summary of their bank accounts. E-mail Component Sends e-mails to users. API Application Provides Internet banking functionality via a JSP/HTTPS API. Makes API calls to [JSON/HTTPS] Makes API calls to [JSON/HTTPS] Makes API calls to [JSON/HTTPS] Single-Page Application Provides all of the Internet banking functionality to customers via their web browser. Makes API calls to [JSON/HTTPS] Makes API calls to [JSON/HTTPS] Makes API calls to [JSON/HTTPS] Mobile App Provides a limited subset of the Internet banking functionality to customers via their mobile device. Reads from and writes to [SQL/TCP] Sends e-mail using Makes API calls to [XML/HTTPS]"},"references/eClassifiers/CompositeRelationshipTarget/inheritance.html":{"path":"Composite Relationship Target/Inheritance","action-uuid":"792064ba-01a3-4039-a019-55f1667d3201","title":"Inheritance","content":"Supertypes "},"demo/internet-banking-system/index.html":{"action-uuid":"76298eda-a933-46f7-b232-40cb42a4d3b7","title":"Internet Banking System Architecture","content":"This site was generated as explained below: A Drawio diagram of an Internet Banking System was created based on images and descriptions from The C4 model for visualising software architecture. Descriptions of elements and diagrams were copied verbatim. The diagram uses free icons from Icons8 to provide visual distinction between architecture elements. The diagram was mapped the Architecture model using properties of the diagram elements. Then the architecture model was transformed to the HTML Application model and a static web site was generated from that model. For the majority of elements icons were generated from the diagram images of the respective elements. The web site is deployed by GitHub Pages. Notes: Diagram elements have tooltips with descriptions from the C4 model site. A click on a diagram element navigates to the element page. The left navigation provides a filter to quickly find a model element by name. Search provides full-text search which also searches for text in diagrams. Glossary provides a list of &ldquo;terms&rdquo; - a dictionary of the language of the system. It needs improvements - currently it shows all actions. Uncheck &ldquo;Hide UUID&rdquo; to see the elements. Elements can be filtered using the filter text field. There is a link to the source code on GitHub in the footer. Connections (relationships) are not mapped in this demo. The the above diagram is a System Context diagram, which is a good starting point for diagramming and documenting a software system, allowing you to step back and see the big picture. Draw a diagram showing your system as a box in the centre, surrounded by its users and the other systems that it interacts with. Mapping Root -&gt; ArchitectureDescription Surroundings -&gt; Node Internet Banking System -&gt; CompositeNode Root -&gt; ArchitectureDescription The root of the diagram is mapped to Architecture Description with the type property set to ArchitectureDescription This documentation was generated from internet-banking-system-architecture.md markdown file with the image above embedded using png-resource fenced block and the diagram embedded using drawio fenced block with representations/drawio/diagram expansion token. Diagram semantic elements were mapped to the root semantic element (ArchitectureDescription) using the following feature-map: container:\n  self: \n    elements:\n      path: 2\n      comparator: label\n The above mapping means that use the semantic element of this diagram element (root) and add semantic elements of its descendants at path length 2 to the elements reference ordering by label. Path length is set to 2 because the diagram elements are contained by the background layer, which is in turn contained by the root. page-element set to true specifies that the root semantic element shall also be the page&rsquo;s semantic elements. Because this is the top-level page (not linked from diagram elements), it also becomes the document&rsquo;s semantic element and as such the contents element of the diagram&rsquo;s Ecore resource. spec sets archtiecture description name to &ldquo;Internet Banking System Architecture&rdquo; - this is what is displayed in the grey navigation bar above: name: Internet Banking System Architecture\n Surroundings -&gt; Node &ldquo;Personal Banking Customer&rdquo;, &ldquo;E-mail System&rdquo;, and &ldquo;Mainframe Banking System&rdquo; diagram elements are mapped to Node. They have semantic-id property to demonstrate its usage. Another way to provide meaningful ID&rsquo;s and URL&rsquo;s is to edit element ID&rsquo;s - this approach is used on lower-level diagrams. The &ldquo;Personal Banking Customer&rdquo; element does not have an image associated with it and therefore uses an explicit icon spec: icon: https://img.icons8.com/officel/16/user.png\n Tooltips are copied from descriptions on the C4 Model diagram. Internet Banking System -&gt; CompositeNode The &ldquo;Internet Banking System&rdquo; diagram element is mapped to CompositeNode because it has sub-elements. It is linked to the &ldquo;Container Diagram&rdquo; page. As such, its semantic element is mapped to the &ldquo;Container Diagram&rdquo; page element as well allowing further mapping on that page. Generation This site was generated with 85 lines of Java code in a JUnit test. Views account balances, and makes payments using Personal Banking Customer A customer of the bank, with personal bank accounts. Gets account information from, and makes payments using Sends e-mail using Internet Banking System Allows customers to view information about their bank accounts, and make payments. Mainframe Banking System Stores all of the core banking information about customers, accounts, transactions, etc. E-mail System The internal Microsoft Exchange e-mail system. Sends e-mails to Views account balances, and makes payments using Personal Banking Customer A customer of the bank, with personal bank accounts. Gets account information from, and makes payments using Sends e-mail using Internet Banking System Allows customers to view information about their bank accounts, and make payments. Mainframe Banking System Stores all of the core banking information about customers, accounts, transactions, etc. E-mail System The internal Microsoft Exchange e-mail system. Sends e-mails to"},"references/eClassifiers/Actor/index.html":{"action-uuid":"bbf98fc1-1d9c-4a4f-879a-e5dca4829522","title":"Actor","content":"Actors play roles/have responsibilies on model elements implementing Undergoer"},"demo/aws/glossary.html":{"action-uuid":"cbf62a4d-f570-4594-bfab-ab24ee5977c7","title":"Glossary","content":"Clear Identifier(s) Hide UUID {{data.value.name}} {{data.value[0].value}} {{item.value}}"},"references/eClassifiers/ArchitectureDescriptionElement/inheritance.html":{"path":"Architecture Description Element/Inheritance","action-uuid":"61b8f42b-c443-4d36-8c47-658bb1c6c89e","title":"Inheritance","content":"Supertypes Subtypes  "},"references/eClassifiers/Tunnel/inheritance.html":{"path":"Tunnel/Inheritance","action-uuid":"a1860d3d-63d8-43ab-b826-cf7b481c281e","title":"Inheritance","content":"Supertypes "},"references/eClassifiers/ArchitectureElement/references/eStructuralFeatures/icon/index.html":{"path":"Architecture Element/Attributes/icon","action-uuid":"76b0f51e-f6c2-4fa2-bbc9-a05b50c7474d","title":"icon","content":"Architecture element icon. Treated as URL if contains / or as a CSS class otherwise. E.g. fas fa-wrench would be treated as a CSS class. If this attribute is blank then the type icon is used. For example, a generic server icon defined at the Server type can be overridden by an icon defined at a server instance (e.g. Web Server)."},"references/eClassifiers/Role/references/eStructuralFeatures/extensions/index.html":{"path":"Role/References/extensions","action-uuid":"b556aba4-df7e-4582-92cb-e521a775012c","title":"extensions","content":"Roles extending this role"},"references/eClassifiers/CompositeNode/index.html":{"action-uuid":"69327d51-6ccf-47cc-9bee-01b45146b560","title":"Composite Node","content":"Node which is also a domain. I.e. it may contain other architecture description elements."},"references/eSubpackages/c4/references/eClassifiers/System/index.html":{"path":"C4/System","action-uuid":"c2b127ee-965b-4b59-bbfa-b45616ea24fb","title":"System","content":"A graph element which is also a graph, i.e. it may contain other graph elements."},"demo/internet-banking-system/search.html":{"action-uuid":"395fbc30-d5ea-42de-9d5d-53a8bd9b5755","title":"Search","content":"Clear"},"references/eClassifiers/Undergoer/inheritance.html":{"path":"Undergoer/Inheritance","action-uuid":"10f4b3f4-dd57-4129-a598-624db4a42bf5","title":"Inheritance","content":"Subtypes "},"references/eClassifiers/Role/references/eStructuralFeatures/extends/index.html":{"path":"Role/References/extends","action-uuid":"51d21a4b-0ad4-47f2-9dc7-4320cfad4922","title":"extends","content":"A role can be a specialization (extension) of one or more roles"},"references/eSubpackages/c4/references/eClassifiers/Code/index.html":{"path":"C4/Code","action-uuid":"6a5a376f-70da-439f-8dfa-9fb393405ee0","title":"Code","content":"A graph element which is also a graph, i.e. it may contain other graph elements."},"index.html":{"action-uuid":"3a12d9b6-c76a-476b-8bfe-883a17bb98b4","title":"Architecture Model","content":"This model provides classes for documenting (software) architectures. It is built on top of the Graph model The model can be used AS-IS or as a base for specialized models. C4 sub-package is an example of such a specialized model. Internet Banking System Architecture (sources) is an example of AS-IS use and mapping of a Drawio diagram to this model to generate HTML documentation. The mapping process is explained in the Beyond Diagrams book. The below diagram shows model elements and their relationships. Inherited relationships are not shown. Architecture element is the base class for other model elements. It may have an icon, a name, documentation, and start/end. Start and end may be absolute or relative. Undergoer interface is implemented by classes which can be acted/operated upon by actors in roles. Roles are defined at the undergoer level. Architecture Description extends Architecture Element, Undergoer, and Documented Named Graph. It means that it may contain graph elements, including Architecture Description Elements. It may define actors. Architecture Description Element extends Architecture Element, Undergoer, and Documented Named Graph Element, i.e. it can be an element of Architecture Description (as the name suggests) and other graphs. Relationship extends Architecture Element, Undergoer, and Documented Named Connection. I.e. it may connect sources and targets, including relationship source and relationship target. Tunnel is a specialization of Relationship which can aggregate (group) other relationships. Domain is both Architecture Description and Architecture Description Element. Domains can be used create a hierarchy of architecture descriptions, similar to file system directories. Relationship source is an Architecture Description Element which can be a source of relationships. Relationship target is an Architecture Description Element which can be a target of relationships. Node is both relationship source and target. Relationship source, target and Node have Composite flavors which are also domains, i.e. may contain Architecture Description Elements. See Also Graph Model Graph Drawio Connecting the dots Executable (computational) graphs &amp; diagrams Beyond Diagrams Architecture Element Architecture Description Architecture Description Element Relationship Tunnel Undergoer Role roles Actor Party Actor Person Actor Domain Relationship Source Relationship Target Composite Relationship Source Composite Relationship Target Node Composite Node roles actors"},"references/eClassifiers/ArchitectureElement/index.html":{"action-uuid":"eeb75794-1c71-48fb-8b8e-d436caf31875","title":"Architecture Element","content":"Base class for elements of architecture."},"references/eClassifiers/ArchitectureElement/inheritance.html":{"path":"Architecture Element/Inheritance","action-uuid":"eee68660-962a-4d76-a1f8-7590af151356","title":"Inheritance","content":"Supertypes Subtypes  "},"demo/aws/references/elements/UEzPUAAOIrF-is8g5C7q-175/references/elements/UEzPUAAOIrF-is8g5C7q-177/index.html":{"path":"AWS Cloud/Amazon S3 Bucket","action-uuid":"5e1a569e-8414-484b-ad0f-c27ab3d76dd3","title":"Amazon S3 Bucket","content":"S3 Bucket full of digital water. Amazon S3 Bucket Actor Amazon S3 Bucket Actor"},"references/eClassifiers/ArchitectureDescription/index.html":{"action-uuid":"ca66af7e-926b-44f5-8287-62e06f9be5b7","title":"Architecture Description","content":"Architecture description contains architecture elements and reference elements such as stakeholders. Architecture description elements are keyed by string identifiers which allows to implement architecture inheritance similar to inheritance in object-oriented languages such as Java or layering in Docker images - a new architecture may be derived from an existing architecture by applying a layer of deltas. This is also similar to a commit tree in Git."},"references/eSubpackages/c4/index.html":{"action-uuid":"55438686-6c4f-464e-9e1e-7ba000729208","title":"C4","content":"TODO&hellip;"},"demo/aws/search.html":{"action-uuid":"2068d0d7-1201-4b79-9528-072c9f89ce23","title":"Search","content":"Clear"},"references/eSubpackages/c4/references/eClassifiers/Component/inheritance.html":{"path":"C4/Component/Inheritance","action-uuid":"5a60f7ec-2fd7-4d9d-a536-317b68155267","title":"Inheritance","content":"Supertypes "},"references/eClassifiers/PartyActor/index.html":{"action-uuid":"cfe8e75e-af0e-4bd3-815c-2746b869414e","title":"Party actor","content":"A party actor."},"references/eClassifiers/RelationshipSource/index.html":{"action-uuid":"0db91ccd-dc13-49a1-a8f5-cdf3f11c17b8","title":"Relationship Source","content":"Source of relationships uniquely identified by string ids. It provides support for architecture inheritance/layering - replacing (overriding), adding, or removing relationships"},"references/eSubpackages/c4/references/eClassifiers/Container/inheritance.html":{"path":"C4/Container/Inheritance","action-uuid":"d00e1a85-646d-4433-bef8-534575340663","title":"Inheritance","content":"Supertypes "},"references/eClassifiers/Relationship/inheritance.html":{"path":"Relationship/Inheritance","action-uuid":"63cc77d3-2278-46ba-8b86-244b4fba2aac","title":"Inheritance","content":"Supertypes Subtypes  "},"demo/aws/references/elements/UEzPUAAOIrF-is8g5C7q-175/index.html":{"action-uuid":"16c8c2dd-11d1-4c3f-9bbf-952171c799e6","title":"AWS Cloud","content":"In-line Markdown documentation Alice -&gt; Bob One Two Three H1 H2 C1 C2"},"references/eClassifiers/Actor/references/eStructuralFeatures/roles/index.html":{"path":"Actor/References/roles","action-uuid":"2f36fe1f-eb31-4dcb-8d45-3a508bb82e67","title":"roles","content":"Roles played by this actor"},"references/eClassifiers/ArchitectureDescription/references/eStructuralFeatures/actors/index.html":{"path":"Architecture Description/References/actors","action-uuid":"97c1e525-dea0-4d1e-98d7-8946ea1c4bed","title":"actors","content":"Actors operating on the elements of this description Actors operating on the elements of this architecture description"},"references/eClassifiers/Role/references/eStructuralFeatures/actors/index.html":{"path":"Role/References/actors","action-uuid":"cda0feb3-3844-4a97-86c6-f7df1db279cd","title":"actors","content":"Actors in this role"},"references/eClassifiers/PersonActor/inheritance.html":{"path":"Person Actor/Inheritance","action-uuid":"91f53012-2e43-4780-a510-57375aba7dc6","title":"Inheritance","content":"Supertypes "},"references/eClassifiers/CompositeRelationshipSource/inheritance.html":{"path":"Composite Relationship Source/Inheritance","action-uuid":"fd162317-d337-4821-97eb-272964567728","title":"Inheritance","content":"Supertypes "},"references/eClassifiers/Node/index.html":{"action-uuid":"b744167e-8bff-49aa-a00c-8582c303f8ee","title":"Node","content":"Node is both relationship source and target. I.e. it may have both incoming and outgoing relationships."},"references/eSubpackages/c4/references/eClassifiers/Person/index.html":{"path":"C4/Person","action-uuid":"74af7748-dce7-4a17-b35c-da41ce6d924b","title":"Person","content":"A graph element which is also a graph, i.e. it may contain other graph elements."},"references/eClassifiers/Tunnel/index.html":{"action-uuid":"db1c849c-6bf8-4ffe-a783-7adeef0b4d8c","title":"Tunnel","content":"Tunnel is a relationship which logically groups (aggregates) other relationships. For example, two composite nodes may have a tunnel relationship which groups relationships between their child elements. A real life example is a VPN tunnel between two networks."},"references/eClassifiers/Node/inheritance.html":{"path":"Node/Inheritance","action-uuid":"8cf6fce7-87bb-4762-b8a0-a28abd57725f","title":"Inheritance","content":"Supertypes Subtypes  "},"references/eClassifiers/RelationshipSource/inheritance.html":{"path":"Relationship Source/Inheritance","action-uuid":"2bad3107-3aa0-45c6-b2fb-d157f808cae2","title":"Inheritance","content":"Supertypes Subtypes  "},"references/eSubpackages/c4/references/eClassifiers/Component/index.html":{"path":"C4/Component","action-uuid":"67642844-46f8-429a-8351-75ecad8c18cc","title":"Component","content":"A graph element which is also a graph, i.e. it may contain other graph elements."},"references/eClassifiers/Role/index.html":{"action-uuid":"97b28bbb-4be9-45d7-8c9c-61f71375078e","title":"Role","content":"A role is played by an Actor performing activities on the containing Undergoer."},"demo/internet-banking-system/r0/internet-banking-system/index.html":{"action-uuid":"16400217-eaad-4bcb-9763-f29112cf01fc","title":"Internet Banking System","content":"The the above diagram is a Container diagram, which is &ldquo;zoom-in to the system boundary&rdquo;. Mapping Surroundings -&gt; selectors &ldquo;Personal Banking Customer&rdquo;, &ldquo;E-mail System&rdquo;, and &ldquo;Mainframe Banking System&rdquo; diagram elements are mapped to the same semantic elements as on the System Context Diagram using selectors. The system context diagram defines the surrounding nodes and this diagram references them. This is a selector of the &ldquo;E-mail System&rdquo;: getDocument().getModelElementByProperty('semantic-id', 'microsoft-exchange')\n The loading logic &ldquo;carries over&rdquo; tooltips from the System Context Diagram to this diagram. Internet Banking System The &ldquo;Internet Banking System&rdquo; container maps to the same semantic element as on the System Context diagram because: The &ldquo;Internet Banking System&rdquo; element on the System Context Diagram links to this diagram page. The &ldquo;Internet Banking System&rdquo; element on this diagram has page-element property set to true. Semantic elements of the child elements of the &ldquo;Internet Banking System&rdquo; element are mapped to the elements reference and ordered with the flow comparator: container:\n  self: \n    elements:\n      path: 1\n      comparator: \n        flow: \n          fallback: label\n          condition: id != 'send-email'\n The condition prevents traversal of the &ldquo;API Application&rdquo; -&gt; &ldquo;E-mail System&rdquo; connection. It is not really necessary here - the order would not change without it. It is provided as an example because connection conditions may be necessary in some cases for proper ordering in diagrams with connection cycles. Containers All containers within the system except the &ldquo;API Application&rdquo; are mapped to Nodes, similar to the surroundings on the System Context diagram. API Application The &ldquo;API Application&rdquo; diagram element is mapped to CompositeNode because it has sub-elements. It is linked to the &ldquo;Container Diagram&rdquo; page. As such, its semantic element is mapped to the &ldquo;API Application Component Diagram&rdquo; page element as well allowing further mapping on that page. This diagram element defines base-uri property as %id%/. Because &ldquo;Placeholders&rdquo; is checked, %id%/ expands to api-application/ during loading. doc-ref is set to readme.md, which in combination with base-uri resolves to api-appliction/readme.md. Personal Banking Customer A customer of the bank, with personal bank accounts. Mainframe Banking System Stores all of the core banking information about customers, accounts, transactions, etc. E-mail System The internal Microsoft Exchange e-mail system. Database Stores user registration information, hashed authentication credentials, access logs, etc. Delivers to the customer's web browser Web Application Delivers the static content and the Internet banking single page application. Makes API calls to [JSON/HTTPS] Single-Page Application Provides all of the Internet banking functionality to customers via their web browser. Makes API calls to [JSON/HTTPS] Mobile App Provides a limited subset of the Internet banking functionality to customers via their mobile device. Reads from and writes to [SQL/TCP] API Application Provides Internet banking functionality via a JSP/HTTPS API. Internet Banking System Allows customers to view information about their bank accounts, and make payments. Sends e-mails to Sends e-mail using Makes API calls to [XML/HTTPS] Visits bigbank.com/ib using [HTTPS] Views account balances, and makes payments using Views account balances, and makes payments using Personal Banking Customer A customer of the bank, with personal bank accounts. Mainframe Banking System Stores all of the core banking information about customers, accounts, transactions, etc. E-mail System The internal Microsoft Exchange e-mail system. Database Stores user registration information, hashed authentication credentials, access logs, etc. Delivers to the customer's web browser Web Application Delivers the static content and the Internet banking single page application. Makes API calls to [JSON/HTTPS] Single-Page Application Provides all of the Internet banking functionality to customers via their web browser. Makes API calls to [JSON/HTTPS] Mobile App Provides a limited subset of the Internet banking functionality to customers via their mobile device. Reads from and writes to [SQL/TCP] API Application Provides Internet banking functionality via a JSP/HTTPS API. Internet Banking System Allows customers to view information about their bank accounts, and make payments. Sends e-mails to Sends e-mail using Makes API calls to [XML/HTTPS] Visits bigbank.com/ib using [HTTPS] Views account balances, and makes payments using Views account balances, and makes payments using"},"demo/aws/index.html":{"action-uuid":"efcf7e24-1d40-4e52-a16a-e8b465f10190","title":"AWS","content":" Amazon VPC Account Baseline Shared Services Account Account Baseline Aggregate CloudTrail and Config Logs Log Archive Account Account Baseline Security Cross-Account Roles Amazon GuardDuty Amazon SNS Security Account Amazon S3 Bucket AWS CodePipeline AWS Organizations AWS Single Sign-on Account Baseline AWS Service Catalog AWS Parameter Store purum Core OU AWS Cloud Amazon VPC Account Baseline Shared Services Account Account Baseline Aggregate CloudTrail and Config Logs Log Archive Account Account Baseline Security Cross-Account Roles Amazon GuardDuty Amazon SNS Security Account Amazon S3 Bucket AWS CodePipeline AWS Organizations AWS Single Sign-on Account Baseline AWS Service Catalog AWS Parameter Store purum Core OU AWS Cloud"},"references/eClassifiers/PersonActor/index.html":{"action-uuid":"8caa9571-945a-4bc3-9a42-409358c4e4b7","title":"Person Actor","content":"A person actor."},"references/eClassifiers/Undergoer/references/eStructuralFeatures/roles/index.html":{"path":"Undergoer/References/roles","action-uuid":"b119babd-712d-4518-bb8a-c9c470ce1bed","title":"roles","content":"Roles operating on this undergoer"},"references/eSubpackages/c4/references/eClassifiers/Relationship/index.html":{"path":"C4/Relationship","action-uuid":"a9c2ea47-8a88-4df9-8884-bcc07dc589c7","title":"Relationship","content":"A graph element which is also a graph, i.e. it may contain other graph elements."},"references/eClassifiers/CompositeRelationshipTarget/index.html":{"action-uuid":"bb74f538-f70e-45a8-8adf-5c650e38302b","title":"Composite Relationship Target","content":"Relationship target which is also a domain, i.e. it may contain other architecture description elements"},"references/eClassifiers/PartyActor/inheritance.html":{"path":"Party actor/Inheritance","action-uuid":"7c86a097-f776-46dc-87cd-3fe79b9032ed","title":"Inheritance","content":"Supertypes Subtypes  "},"references/eClassifiers/CompositeNode/inheritance.html":{"path":"Composite Node/Inheritance","action-uuid":"0f3f9afd-f52d-4eb0-ac23-a6c22b02963a","title":"Inheritance","content":"Supertypes Subtypes  "},"references/eClassifiers/Domain/index.html":{"action-uuid":"3fee4116-76e8-45da-b826-dc7f143d5932","title":"Domain","content":"Domains allow to organize architecture description elements into a hierarchy"},"glossary.html":{"action-uuid":"762ddd72-b36a-4069-92a7-bd80ab3d278f","title":"Glossary","content":"Clear Identifier(s) Hide UUID {{data.value.name}} {{data.value[0].value}} {{item.value}}"},"references/eSubpackages/c4/references/eClassifiers/Container/index.html":{"path":"C4/Container","action-uuid":"36211c52-73cc-4cff-97de-29ff6655014a","title":"Container","content":"A graph element which is also a graph, i.e. it may contain other graph elements."},"references/eSubpackages/c4/references/eClassifiers/Relationship/inheritance.html":{"path":"C4/Relationship/Inheritance","action-uuid":"391d0285-5e1b-48df-99d8-43571441cd82","title":"Inheritance","content":"Supertypes "},"references/eSubpackages/c4/references/eClassifiers/Context/inheritance.html":{"path":"C4/Context/Inheritance","action-uuid":"369286ce-e1d2-46cc-8eb8-9250787cbb80","title":"Inheritance","content":"Supertypes "},"references/eClassifiers/Relationship/index.html":{"action-uuid":"0beae560-2239-443a-b16c-84c56e445175","title":"Relationship","content":"Relationship between relationship source and relationship target. Relationships are contained by their source and uniquiely identified in the source by a string id. This allows to implement relationship inheritance behaviors such as overriding (replacing), adding, or removing."},"references/eClassifiers/CompositeRelationshipSource/index.html":{"action-uuid":"7bcbea5d-adc0-40f3-9934-a37605ab667e","title":"Composite Relationship Source","content":"Relationship source which is also a domain. I.e. it may contain other architecture description elements."},"references/eClassifiers/Domain/inheritance.html":{"path":"Domain/Inheritance","action-uuid":"1221c603-5d73-4eb3-a2d6-325586ceee3c","title":"Inheritance","content":"Supertypes Subtypes  "},"references/eClassifiers/ArchitectureDescription/inheritance.html":{"path":"Architecture Description/Inheritance","action-uuid":"5b902d9b-3d01-497f-a5a7-d6b3ea1acab8","title":"Inheritance","content":"Supertypes Subtypes  "},"references/eClassifiers/RelationshipTarget/inheritance.html":{"path":"Relationship Target/Inheritance","action-uuid":"2f6b89f3-420e-402b-8902-a1d7e8270190","title":"Inheritance","content":"Supertypes Subtypes  "},"demo/internet-banking-system/r0/internet-banking-system/rh/api-application/rh/mainframe-banking-system-facade/index.html":{"path":"Internet Banking System/API Application/com.bigankplc.internetbanking.component.mainframe","action-uuid":"412d5925-b578-4a37-93ad-0c89ef0a87bd","title":"com.bigankplc.internetbanking.component.mainframe","content":"The the above diagram is a Code diagram, which is used to show how a component is implemented as code. Diagram elements were taken from the Drawio UML shapes palette. Icons were added by manually adding image=https://cdn.jsdelivr.net/gh/Nasdanika-Models/ecore@master/graph/web-resources/icons/EClass.gif; to the style. Mapping The package container maps to the same semantic element as on the API Application Component diagram because: The &ldquo;Mainframe Banking System Facade&rdquo; element on the API Application Component diagram links to this diagram page. The package element on this diagram has page-element property set to true. Semantic elements of the child elements of the &ldquo;API Application&rdquo; element are mapped to the elements reference with ordering by label comparator: container:\n  self:\n    elements:\n      path: 1\n      comparator: label\n All code elements within the package are mapped to Nodes. Representation element filtering Fill color of MainframeBankingSystemFacadeImpl is set during the generation with the following code: @Override\nprotected void filterRepresentationElement(\n\t\tElement representationElement, \n\t\tEObject semanticElement,\n\t\tMap&lt;EObject, EObject&gt; registry, \n\t\tProgressMonitor progressMonitor) {\n\n\tsuper.filterRepresentationElement(representationElement, semanticElement, registry, progressMonitor);\n\t\n\tif (representationElement instanceof Node) {\n\t\tNode node = (Node) representationElement;\n\t\tif (&quot;MainframeBankingSystemFacadeImpl&quot;.equals(node.getId())) {\n\t\t\tnode.getStyle().put(&quot;fillColor&quot;, &quot;#ffe6cc&quot;);\n\t\t\tnode.getStyle().put(&quot;strokeColor&quot;, &quot;#d79b00&quot;);\n\t\t}\n\t}\t\t\t\t\t\n}\n Representation filtering may be used to inject information which is not available during diagram creation or dynamic, but is available during generation. In this example the background color may represent code component &ldquo;health&rdquo; - code coverage, number and severity of SonarQube findings, etc. At higher level diagrams it may represent, say: During construction: development progress - pending, in progress, blocked, behind schedule, &hellip; After deployment: container runtime status - errors, CPU load, memory consumption, &hellip; +throws MainframeBankingSystemFacadeImpl AbstractResponse AbstractRequest GetBalanceRequest GetBalanceResponse BankingSystemConnection MainframeBankingSystemFacade MainframeBankingSystemException +sends +receives +parses +uses +creates com.bigankplc.internetbanking.component.mainframe A facade onto the mainframe banking system. InternetBankingSystemException +throws MainframeBankingSystemFacadeImpl AbstractResponse AbstractRequest GetBalanceRequest GetBalanceResponse BankingSystemConnection MainframeBankingSystemFacade MainframeBankingSystemException +sends +receives +parses +uses +creates com.bigankplc.internetbanking.component.mainframe A facade onto the mainframe banking system. InternetBankingSystemException"},"references/eSubpackages/c4/references/eClassifiers/Person/inheritance.html":{"path":"C4/Person/Inheritance","action-uuid":"9c08e6c8-e926-466d-a3de-7fb4d6f13b4c","title":"Inheritance","content":"Supertypes "},"demo/internet-banking-system/glossary.html":{"action-uuid":"64e2178b-8e59-47d9-862a-795756bc9f20","title":"Glossary","content":"Clear Identifier(s) Hide UUID {{data.value.name}} {{data.value[0].value}} {{item.value}}"},"references/eClassifiers/RelationshipTarget/index.html":{"action-uuid":"fc2b602b-69d0-40e5-bad7-717f08001745","title":"Relationship Target","content":"An architecture description element which can have incoming relationships."},"references/eSubpackages/c4/references/eClassifiers/Code/inheritance.html":{"path":"C4/Code/Inheritance","action-uuid":"4399ba99-e38e-4070-bc11-b03cbb5b6f8a","title":"Inheritance","content":"Supertypes "},"references/eSubpackages/c4/references/eClassifiers/Context/index.html":{"path":"C4/Context","action-uuid":"d620407a-f991-48e4-a7f9-16e745085700","title":"Context","content":"A graph element which is also a graph, i.e. it may contain other graph elements."},"demo/aws/references/elements/UEzPUAAOIrF-is8g5C7q-175/references/elements/UEzPUAAOIrF-is8g5C7q-184/index.html":{"path":"AWS Cloud/Core OU","action-uuid":"0e7f16cd-e649-4762-9afa-fd496afd6285","title":"Core OU","content":" Actor"},"references/eClassifiers/Undergoer/index.html":{"action-uuid":"72a7a0ff-9e19-4853-9946-73ccb3876511","title":"Undergoer","content":"Something operated on by actors in roles. A container of roles referencing actors. For example, a Server is patched by the &ldquo;Unix Support&rdquo; role and Joe Doe plays this role."},"references/eClassifiers/Role/inheritance.html":{"path":"Role/Inheritance","action-uuid":"278d1ca6-4781-4a51-9e2c-f3ec6e4d3bb0","title":"Inheritance","content":"Supertypes "},"references/eSubpackages/c4/references/eClassifiers/System/inheritance.html":{"path":"C4/System/Inheritance","action-uuid":"a4d66216-1db9-47fe-a9da-3f4edc75af41","title":"Inheritance","content":"Supertypes "},"references/eClassifiers/Actor/inheritance.html":{"path":"Actor/Inheritance","action-uuid":"c78cb070-c0a4-4efd-a850-f588f635dd43","title":"Inheritance","content":"Supertypes Subtypes  "},"references/eClassifiers/ArchitectureDescriptionElement/index.html":{"action-uuid":"369037fa-0b22-4754-afb4-1e243e0d5185","title":"Architecture Description Element","content":"Base class for elements of architecture descriptions"}}