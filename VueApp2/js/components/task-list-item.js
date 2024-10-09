app.component('TaskListItem', {

    data: function() {
        return {
            id: Math.floor(Math.random() * 10e16)
        }
    },
    props: {

        name: {
            type: String,
            default:"Unnamed Assignment"
        },
        description: {
            type: String,
            default:"No Description"
        },
        priority: {
            type: String,
            default: "1"
        },
        itemSteps: {
            type:Array,
            default: new Array([['Step 1',false],['Step 2',false]])
        },
        // deadline: {
        //     type: Date,
        //     default: new Date("01-01-2001")
        // }

    },
    methods: {
        edit() {

        }
    },


    template: `
     <div class="row text-start">
                    <div class="col">
                        <div class="row">
                            <div class="col-1 pe-0">
                                <span class="badge text-bg-secondary w-100 py-2 px-0 border border-dark">item.priority</span>
                            </div>
                            <div class="col-4">
                                <h2 class="">{{name}}</h2>
                            </div>
                        </div>
                    </div>
                    <p>description</p>
<!--                    <p class="text-muted fw-bold">Deadline: {{(item.dueDate.getMonth() + 1)}}/{{(item.dueDate.getDate() + 1)}}/{{item.dueDate.getFullYear()}}</p>-->

<!--                    <form v-for="step in itemSteps" class="bg-secondary-subtle">-->
<!--                        <input type="checkbox" v-bind:checked="step[1]" :id="id + ' ' + itemSteps.indexOf(step)">-->
<!--                        <label v-bind:for="id + ' ' + itemSteps.indexOf(step)">{{step[0]}}</label>-->
<!--                    </form>-->

                </div>
                <div class="btn bg-danger text-light float-end mt-3" @click="remove(item)">Delete</div>
                <div class="btn btn-primary float-end mt-3" data-bs-toggle="modal" v-bind:data-bs-target="'#edit' + id">Edit</div>
`
})