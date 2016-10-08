## Summary
The Flyweight pattern coserves memory by sharing large numbers of fine-grained objects efficiently.
Shared flyweight objects are immutable,that is,they cannot be changed as they represent the characteristics 
that are shared with other objects.

Essentially Flyweight is an 'object normalization technique' in which common properties are factored out inot shared flyweight objects.(Note:the idea is similar to data model normalization,
a process in which the modeler attempts to minimize redundancy).

An example of the Flyweight Pattern is within the Javascript engine itself which maintains a list of immutable string that are shared across the applications.

Other examples include character and line-styles in a word processor,or 'digit receivers' in a public switched tempphone network apllication.Your will find flyweights mostly in utility in utility type application such as word processors,graphics programs,
and network apps;they are less often used in data-driven business type applications,
