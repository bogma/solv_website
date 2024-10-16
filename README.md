# SOLV website

## Prerequisites

+ for building the website [hugo](gohugo.io) is used. For installation see [here](https://gohugo.io/getting-started/installing/)
+ git client (i.e. [git-fork](https://git-fork.com/)) to pull/push changes
+ editor (i.e. [vs-code](https://code.visualstudio.com/)) to edit the markdown content.

If you are on windows and have [chocolatey](https://chocolatey.org/) installed you can easily install everything with

    choco install hugo git git-fork vs-code -y

After installation clone the repository to your PC. Don't forget to checkout the **hugo-solv** theme which is in a submodule.

    git clone https://github.com/bogma/solv_website.git
    cd solv_website
    git submodule update --init

## How is the website composed

The website is built by hugo which is a static website generator. Hugo uses all the markdown files in the `/content` folder and data files in the `/data` folder as source. Then it applies the templates residing in the `/layout` folder and the `/themes` folder respectively to build the complete website.

While working on the website content or the templates you can start hugo locally in the root directory of your site. This way you can see the result of your changes immediately. The command

```
hugo server -wDF
```
starts hugo with its built in webserver. Hugo watches for any file changes (-w) and rebuilds the site as needed. All draft (-D) files are also built as well as all content files with future date (-F). For more options see [the hugo documentation](https://gohugo.io/commands/). With

```
hugo -DF
```
the website will be built in the `/public` subfolder.

When you are finished with your changes a push to the master branch will trigger a CircleCI build. The configuration for the build is in `.circleci/config.yml`.

## Website structure

The website is roughly structured into:
+ **main content**: all the pages that have their own menu such as `board.md, arge-alp.md ...`.
+ **blog items:** all blog items have a subfolder per year and then a subfolder numberd in ascending order. There are 3 types of blog items
  + post: all entries that are not press infos or events.
  + pressinfo: as pressinfos have a spzial formatting they have a extra type
  + event: events are the most complicated entries of the site. They change several times over their livetime and therefore are not typical creatures for a blog based website. Each event has a `status` field in its frontmatter. The status can be:
    + *planned* - the event date (and location in most cases) is known.
    + *active* - all the details (start time, courses, officials, meetingpoint, ...) are known.
    + *done* - the event is done and results are ready
+ **data driven content:** some content uses data files in yaml format that are in the `/data` folders such as the board, club and cups page but especcially the champions page.
+ **static content:** static content will be copied from the `/static` folder. It contains additional CSS and JavaScript files and common images. The plan was to keep all static file that belong to blog items in the blog item subfolder (= hugo resource bundle). There is however a problem with `*.html` files residing in the bundle. The are not treated as resources as normal and therefore also are in the `/static` folder.

## Working on content

### Posts and Pressinfos

Adding new posts and pressinfos should be simple. Just use the `hugo new` command like that:

```
hugo new pressinfo/<year>/<num>
hugo new post/<year>/<num>
```

So i.e. `hugo new post/2020/04` will use the post archetype in `/archetypes/post` and create a new post in the directory `/content/post/2020/04`. Don't worry to override an existing post - if the directory already exists the new command will fail. Then start to edit the `index.md` file. The tags array can be used to categorize the article (shown on the right side of the list page). Don't forget to set the draft field to false as the deployment does not render the files in draft state.

The content above the `<!--more-->` marker will be shown in the list overview of the articles. The content after the `<!--more-->` marker is only shown if you open the full article.

Images for pressinfos go to the pressinfo folder along the index.md file. They will be automatically added to a slideshow in the article. If you want a special text for an image you have to uncomment the `resources:` section in the front matter and put a filter and text for your image there.

### Events

There are 2 main types for events which have their own archetype: Salzburg Cups and Schulcups. To create one use

```
hugo new event/<year>/sbgcup/<num> -k event-sbgcup
hugo new event/<year>/schcup/<num> -k event-schcup

1..9 | % { $index = ("{0:00}" -f $_); hugo new event/2022/sbgcup/$index -k event-sbgcup }
rm -Path ./content/event/2023 -Include placeholder.foo -Recurse
```

Events have 2 subfolders for additional informations and results. Files in the `/infos` subfolder will be shown as links in the list item and in the right Info widget in the article itself. Files in the results folder will also be shown as links but in the future they should also be used to generate spezial *result pages* to minimize the work that has to be done after the competition is done. The goal is to put only a *.xml file in the results folder and the results table, the splitsbrowser page and maybe a winsplits page is generated from it.

# Considerations, Conventions [TODO]

#### file names

all english
```
<year>_[<num>_][<type>_]<name>.<ext>
````
i.e.
- 2017_01_sbgcup_result.pdf
- 2019_03_schcup_announcement.pdf
- 2018_LMS_splits.pdf

directions - Anfahrtsplan
announcement - Ausschreibung

## test


