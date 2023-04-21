# Azimutt documentation

This website is the [Azimutt documentation](https://docs.azimutt.app) powered by [Docusaurus 2](https://docusaurus.io).

If you want to use Azimutt, see you there: [azimutt.app](https://azimutt.app) 😉

## Development

- Installation: `yarn`
- Dev server: `yarn start`
- Website build: `yarn build` (static content will be in `build` folder)

## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
