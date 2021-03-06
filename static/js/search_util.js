exports.get_search_terms = function (input) {
    const search_terms = input.toLowerCase().split(",").map(function (s) {
        return s.trim();
    });
    return search_terms;
};

exports.vanilla_match = function (opts) {
    /*
        This is a pretty vanilla search criteria
        where we see if any of our search terms
        is in our value. When in doubt we should use
        this for all Zulip filters, but we may
        have more complicated use cases in some
        places.

        This is case insensitive.
    */
    const val = opts.val.toLowerCase();
    return _.any(opts.search_terms, function (term) {
        if (val.indexOf(term) !== -1) {
            return true;
        }
    });
};

window.search_util = exports;
