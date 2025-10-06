import agileRailsImg from '../assets/images/course-images/agile-web-dev-rails-7.2.jpg';
import eloquentJsImg from '../assets/images/course-images/eloquent-js.jpg';
import eloquentRubyImg from '../assets/images/course-images/eloquent-ruby.jpeg';
import makersImg from '../assets/images/course-images/makers2.jpg';
import poodrImg from '../assets/images/course-images/poodr.webp';
import railsTutorialImg from '../assets/images/course-images/ror-tutorial-7.jpeg';
import rspecImg from '../assets/images/course-images/testing-rspec-3.jpg';
import topImg from '../assets/images/course-images/top.jpg';
import leetImg from '../assets/images/course-images/leet.jpg';

export const courses = [
  {
    id: 'makers-academy',
    title: 'Makers Academy Bootcamp',
    progress: 100,
    image: makersImg,
    link: 'https://makers.tech/',
    description: `UK's best renowned in person immersive Bootcamp, full stack Ruby & JS syllabus via TDD & agile.`,
  },
  {
    id: 'odin-project',
    title: 'The Odin Project',
    progress: 100,
    image: topImg,
    link: 'https://www.theodinproject.com/',
    description: 'Full stack career web dev curriculum, all modules & projects completed; Ruby, Rails, JS, React, HTML, CSS.',
  },
  {
    id: 'rails-tutorial',
    title: 'Ruby on Rails Tutorial',
    progress: 100,
    image: railsTutorialImg,
    link: 'https://www.railstutorial.org/',
    description: `Renowned Rails tutorial; MVC, TDD, auth, Active-Record, Storage, Jobs, Mailers, front end, performance, security, deployment.`,
  },
  {
    id: 'agile-web-dev-rails-7-2',
    title: 'Agile Web Development with Rails 7.2',
    progress: 100,
    image: agileRailsImg,
    link: 'https://pragprog.com/titles/rails7/agile-web-development-with-rails-7/',
    description: `Patterns, Hotwire-Turbo/Stimulus, APIs, WebSockets & ActionCable, jobs, testing, security, and deployment.`,
  },
  {
    id: 'effective-testing-rspec-3',
    title: 'Effective Testing with RSpec 3',
    progress: 80,
    image: rspecImg,
    link: 'https://pragprog.com/titles/rspec3/effective-testing-with-rspec-3/',
    description: `BDD, unit, integration & feature testing, mocks & stubs, shared e.g's, testing best practices.`,
  },
  {
    id: 'eloquent-javascript',
    title: 'Eloquent JavaScript',
    progress: 40,
    image: eloquentJsImg,
    link: 'https://eloquentjavascript.net/',
    description: `Deep-dive into modern JS fundamentals, functional and OOP, closures, prototypes, classes, modules, DOM, events, async, promises.`,
  },
  {
    id: 'eloquent-ruby',
    title: 'Eloquent Ruby',
    progress: 100,
    image: eloquentRubyImg,
    link: 'https://www.pearson.com/en-us/subject-catalog/p/eloquent-ruby/P200000002736/',
    description: `Ruby idioms and style, classes, modules, mixins, procs, metaprogramming, DSLs, practical patterns.`,
  },
  {
    id: 'poodr',
    title: 'P.O.O.D. Ruby',
    progress: 100,
    image: poodrImg,
    link: 'https://www.poodr.com/',
    description: `OOP, encapsulation, inheritance, composition, duck typing, polymorphism, and crafting flexible, maintainable Ruby.`,
  },
  {
    id: 'leet',
    title: 'LeedCode challenges',
    progress: 20,
    image: leetImg,
    link: 'https://www.leetcode.com/',
    description: `DSA practice - so far I've completed recursion, DP, linked list and binary tree modules.`,
  },
];