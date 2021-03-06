import * as $ from  'jquery/src/jquery';
import './babel';

import './theme/styles.scss';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./components', true, /^\.\/(?!.*(?:__tests__)).*\.(js?)$/));
requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(js?)$/));
