'use strict';

const expect = require('chai').expect;
const sanitize = require('../../.././core/modules/sanitize.js');
const text = require('../../.././core/modules/text.js');
const domMock = require('../.././jsdom-site-mock.js');

describe('Core', () => {
    describe('Modules', () => {
        it('should export a function', () => {
            expect(text).to.be.a('function');
        });

        describe('.text(element)', () => {
            it('should return all text value of nested elements', () => {
                expect(sanitize(domMock.document.querySelectorAll('.list-unstyled, .text-small')[0])).to.contains('Last time');
            });
        });

        describe('.text(element, opts)', () => {
            it('should return String with spacer equal to |', () => {
                expect(text('bringing science to digital marketing DP6', { sanitize: true })).to.equal('bringing|science|to|digital|marketing|dp6');
            });
        });
    });
});