# Webpack dll spike

This is a spike on how to use dll to speed up the build, include 2 steps:

- `npm run dll`: Build dll bundle
- `npm run start`: Build source files and replace node_modules by modules in dll bundle
