/**
 *
 *  ____ _ ___ _  _ _  _ ___     ___  ____ ____ ____ ____    ____ ___  ____
 *  | __ |  |  |__| |  | |__]    |__] |__| | __ |___ [__     [__  |__] |__|
 *  |__] |  |  |  | |__| |__]    |    |  | |__] |___ ___]    ___] |    |  |
 *
 *  Easy way to enable Single Page Applications for GitHub Pages
 *
 *  This project was released under MIT license.
 *
 *  @link      https://github.com/rafrex/spa-github-pages
 *  @author    Rafael Pedicini <code@rafrex.com>
 *  @link      http://websemantics.ca
 *  @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 *
 *  @param {Object} l, the document current location
 *  @param {Boolean} projectPages, true by default, https://help.github.com/articles/user-organization-and-project-pages
 *
 */

;(function(l) {

   /* redirect all 404 trafic to index.html */
   function redirect() {
     l.replace(l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') + '/?' +
              (l.pathname ? 'ref=' + l.pathname.slice(1) : '') + l.hash)
   }

   /* resolve 404 redirects into internal routes */
   function resolve() {
     if (l.search) {
       var q = {}
       l.search.slice(1).split('&').forEach(function(v) {
         var a = v.split('=')
         q[a[0]] = a[1]
       })
       if (q.ref !== undefined) {
         window.history.replaceState(null, null, q.ref + l.hash)
       }
     }
   }

  /* if current document is 404 page page, redirect to index.html otherwise resolve */
  document.title === '404' ? redirect() : resolve()

}(window.location))
