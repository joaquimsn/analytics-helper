'use strict';

const expect = require('chai').expect;
const sanitize = require('../../.././core/modules/sanitize.js');
const text = require('../../.././core/modules/text.js');
const domMock = require('../.././jsdom-site-mock.js');

describe('Core', () => {
    describe('Modules', () => {
        describe('.text(element)', () => {
            it('should export a function', () => {
                expect(text).to.be.a('function');
            });
        });

        /*describe('.text(element)', () => {
            it('should return all text value of nested elements', () => {
                expect(sanitize(domMock.document.querySelectorAll('.list-unstyled, .text-small')[0])).to.contains('Last time');
            });
        });*/
    });
});