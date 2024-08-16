'use strict';
import { sum } from '@frontend-dev-cli/utils';

function core() {
    console.log('core', sum(32, 2))
}

core();