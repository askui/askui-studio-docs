# askui-studio-docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```shell
npm install
```

### Local Development

```shell
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### How to get Search to Work Locally

For your search bar to work locally the above command is not sufficient.
You have to generate the static content and then serve it locally.

```shell
npm run build
npm run serve
```

### Build

```shell
npm run build
```

This command generates static content into the `dist` directory and can be served using any static contents hosting service.

### Vale Prose Linting

Before every commit, vale will run against every Markdown file under `docs/`.

Do the following to install _Vale_ and the AskUI style guide.

* [Install _Vale_ instructions](https://vale.sh/docs/vale-cli/installation/).
* Clone the [askui-vale repository](https://github.com/askui/askui-vale)
* Symlink the styles to your `.github` folder

```bash
ln -s <Path to cloned askui-vale-repository>/styles .github/styles  
```

To run _Vale_ manually before committing:

```shell
# Switch to root directory first
vale docs
```

## Contributing

### Branching

Your branch name should conform to the format `<issue id>-<issue title lower-cased and kebab-cased>`, e.g., let's say you have an issue named *Hello World* with id *AS-101*, the branch name would be `AS-101-hello-world`. We use the issue id prefix to prepend a link to the issue to the commit message header. In some cases, when doing a quick fix of a typo etc. when there is no issue, feel free to just use a descriptive name of what you are doing, e.g., `fix-typo-in-example-readme`.

### Commit Message Standard

Commit messages should conform to [Conventional Commits Message Standard](https://www.conventionalcommits.org/en/v1.0.0/). Exceptions to this rule may be merge commits.

### Githooks

This repository uses [githooks](https://git-scm.com/docs/githooks) with [husky](https://github.com/typicode/husky) to lint and test the code, to help you stick to the commit message standard by opening up a CLI for constructing the commit message on each commit, prepending the commit message with the issue number or linting the commit message etc. In some cases, e.g., when using a Git client such as [Git Tower](https://www.git-tower.com/) or [GitKraken](https://www.gitkraken.com/), cherry-picking, rebasing or in a CI pipeline, you may want to disable githooks, especially the interactive CLI.

For skipping the interactive CLI when committing, set the environment variable `SKIP_CZ_CLI` to `true`.
```sh
$ export SKIP_CZ_CLI=true
```

For skipping all githooks, set the environment variable `HUSKY` to `0`.
```sh
$ export HUSKY=0
```

In a CI pipeline, the githooks are skipped by default.
