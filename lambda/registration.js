require('@babel/polyfill/noConflict')
import registration from 'functions/registration'
import decorator from 'util/db/decorator';

exports.handler = decorator(registration);