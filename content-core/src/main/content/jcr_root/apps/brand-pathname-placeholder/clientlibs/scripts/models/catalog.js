/*
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
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
define('brand-pathname-placeholder/models/catalog', [
    'underscore',
    'jquery',
    'backbone'
], function(_, $, Backbone) {
    'use strict';

    /**
     * @constructor
     * @augments module:Backbone.Model
     */
    var Catalog = Backbone.Model.extend(/** @lends Catalog.prototype */{

        /**
         * Default model options.
         *
         * @type {Map}
         * @static
         */
        defaults: {
            title: '',
            path: '',
            coverImage: '',
            callouts: null,
            categories: null
        },

        /**
         * Generic initialization for the model.
         *
         * @param {Map} [options] Options for the model.
         */
        initialize: function(options) {
            if (!this.get('categories')) {
                this.set('categories', []);
            }
            if (!this.get('callouts')) {
                this.set('callouts', []);
            }
        }

    });

    // return the model
    return Catalog;

});
