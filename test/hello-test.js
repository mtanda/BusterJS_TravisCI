/**
 * Created by azu.
 * Date: 12/05/31 22:46
 * License: MIT License
 */
var assert = buster.assertions.assert;
buster.testCase("Src Test", {
    "should be HELLO" : function(){
        assert.equals(hello(), "HELLO");
    }
})
buster.testCase("Src Test2", {
    "should be FOO" : function(){
        assert.equals(foo(), "FOO");
    }
})
