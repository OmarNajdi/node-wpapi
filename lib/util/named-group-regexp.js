/**
 * @module util/named-group-regexp
 */
'use strict';

const pattern = '\\(\\?(?:P<)(.+?)>(.+?)\\)(?:$|\\/)';

module.exports = {
	/**
	 * String representation of the exported Regular Expression; we construct this
	 * RegExp from a string to enable more detailed annotation and permutation
	 *
	 * @prop {String} pattern
	 */
	pattern: pattern,

	/**
	 * Regular Expression to identify a capture group in PCRE formats
	 * `(?<name>regex)`, `(?'name'regex)` or `(?P<name>regex)` (see
	 * regular-expressions.info/refext.html)
	 *
	 * @prop {RegExp} namedGroupRE
	 */
	namedGroupRE: new RegExp( pattern ),
};
