# KodeMate homepage

The frontend development for homepage, [kodemate](http://kodemate.com).

## Setup

Only basic node and bower dependencies.

```
$ npm install

$ bower install
```

## Usage

Compile `.jade` to `.html`:

```
$ gulp jade
```

Compile `.scss` to `.css`:

```
$ gulp sass
```

Copy `src/vendor` to `build/vendor`:

```
$ gulp assets
```

To build all, which includes `jade, scss, assets`:

```
$ gulp build
```

To clean `build` directory:

```
$ gulp clean
```

To automatically watch for source change and re-build,

```
$ gulp watch
```

## Page listing

Following pages to develop.

* **Home** (`index.html`)
* **Courses** (`courses.html`)
* **Course Detail** (`course.html`)
* **About** (`about.html`)
* **Contact** (`contact.html`)
* **Request a course** (`request-a-course.html`)
* **Benefits** (`benefits.html`)
* **FAQs** (`faqs.html`)

## Task lists

Tasks for development.

- [X] Basic setup
- [X] Style basic for `index.html`
- [X] Add more pages to sites
- [X] Port to SASS (required project re-structure)
- [X] Port to Jade (required project re-structure)
- [X] Create build script
- [X] Refactor project
