# @Gov4Git/JS-Client

A JavScript wrapper to https://github.com/gov4git/gov4git

## Install

```bash
npm install -g @gov4git/js-client
```

You should then be able to run `gov4git` commands or the alias `g4g`.

```
g4g --help
```

## Updating to a newer version of the GitRules Protocol

A new version of this package needs to be released whenever [GitRules](https://github.com/gov4git/gov4git) releases a new version.

### Update process

1. Update the `archive-downloader.variables.version` field in `package.json` to the new version of GitRules.
2. Update the `version` field in `package.json` (typically matching the new version of GitRules)
3. When these changes make it to the main branch, a GitHub action will automatically deploy a new npm package.
