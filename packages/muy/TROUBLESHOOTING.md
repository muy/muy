# Troubleshooting

## Fixing build errors

**Given** you have gatsby website with `muy` package installed  
**When** you run `npm start` and try to open website and you find the following message:

```
Failed to compile
./node_modules/muy/dist/index.umd.js
Module not found: Error: Can't resolve '@material-ui/core/Box' in 'node_modules/muy/dist'
This error occurred during the build time and cannot be dismissed.
```

**Then** check if you have installed latest version of `@material-ui`

```shell
npm install @material-ui/core
```

