/*
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2016 Adobe Systems Incorporated

 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */
define('Hello', [
    'underscore',
    'jquery'
], function(){
    'use strict';
  var Hello = Backbone.View.extend({
    el: $('body'),
    initialize: function(){
      _.bindAll(this, 'render');
       this.render();
    },
    render: function(){
      $(this.el).append("<p>Hello world</p>");
    }
  });
  var hello = new Hello();
});