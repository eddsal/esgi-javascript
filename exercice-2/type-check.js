
function type_check_v1(val, type) {
    if (typeof(val) === type) {
        return true
    }
}
console.log(type_check_v2(1, 'number'));
