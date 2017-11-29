var variablename = new Vue({
    el: '',
    // html element (class or id, or new element usually) this Vue is attached to.
    data: {},
    // data
    method: {},
    // reactive functions
    computed: {},
    // solid functions, only update when one of it's dependencies update
    watch: {},
    // trigger on events
    template: '',
    // inject html code into related el element
    props: {
        name: {
            type: String,
            required: true,
            //OR
            default: ""
        }
    },
    //
    filters: {},
    //
    mixins: []
});

Vue.component('selectorelement', {
    // same as new Vue. Useful to create duplicate templates.
});

Vue.component('selectorelement', TemplateVariable);

export default {
    data: function () {
        return {

        };
    }
};

// 3 ways to communicate