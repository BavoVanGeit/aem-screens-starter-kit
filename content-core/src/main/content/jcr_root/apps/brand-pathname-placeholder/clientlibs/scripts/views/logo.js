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
define('brand-pathname-placeholder/views/logo', [
    'underscore',
    'jquery',
    'util/Util',
    'views/BaseView'
], function(_, $, Util, BaseView) {
    'use strict';

    var LogoView = BaseView.extend(/** @lends LogoView.prototype */ {

        /**
         * Class name for the wrapping element of the view.
         *
         * @type {String}
         */
        className: 'geo-LogoView'

    });

    // return the view
    return LogoView;

});
