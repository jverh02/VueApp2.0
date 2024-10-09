app.component('TaskList', {

    data: function() {
        return {
            id: Math.floor(Math.random() * 10e16),
        }

    },

    props: {

        tasks: Array
    },

    methods: {
        addTask: function(item) {
            this.tasks.push(item);
        },

        removeTask: function(item) {
            this.tasks.splice(indexOf(item));
        }
    },

    computed: {

    },

    template: `
    <ul class="list-group list-group-flush border bottom">
            <li class="list-group-item bg-dark-subtle border border-dark" v-for="item in tasks">
                <task-list-item name="{{item.name}}" description = {{item.description}} priority={{item.priority}}, itemSteps={{item.steps}}></task-list-item>
                <div class="row text-start">
                    <div class="col">
                        <div class="row">
                            <div class="col-1 pe-0">
                                <span class="badge text-bg-secondary w-100 py-2 px-0 border border-dark">{{getPriority(item)}}</span>
                            </div>
                            <div class="col-4">
                                <h2 class="">{{item.name}}</h2>
                            </div>
                        </div>
                    </div>
                    <p>{{item.description}}</p>
<!--                    <p class="text-muted fw-bold">Deadline: {{(item.dueDate.getMonth() + 1)}}/{{(item.dueDate.getDate() + 1)}}/{{item.dueDate.getFullYear()}}</p>-->

                    <form v-for="step in item.steps"class="bg-secondary-subtle">
                        <input type="checkbox" v-bind:checked="step[1]" v-bind:id="assignList.indexOf(item) + ' ' + item.steps.indexOf(step)">
                        <label v-bind:for="assignList.indexOf(item) + ' ' + item.steps.indexOf(step)">{{step[0]}}</label>
                    </form>

                </div>
                <div class="btn bg-danger text-light float-end mt-3" @click="remove(item)">Delete</div>
                <div class="btn btn-primary float-end mt-3" data-bs-toggle="modal" v-bind:data-bs-target="'#edit' + assignList.indexOf(item)">Edit</div>


                <!-- Modal -->
                <div class="modal fade" v-bind:id="'edit' + assignList.indexOf(item)" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit Assignment</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="row py-2">
                                        <div class="col">
                                            <label class="form-label" v-bind:for="'#' + item.id + ' name'">Title</label>
                                            <input type="text" v-bind:id="item.id + ' name'" class="form-control" v-model="item.name">

                                        </div>
                                        <div class="col">
                                            <label class="form-label" v-bind:for="'#' + item.id + ' priority'">Priority</label>
                                            <select class="form-select" v-bind:id="item.id + ' priority'" v-model="item.priority">


                                                <option value="1">!</option>
                                                <option value="2">!!</option>
                                                <option value="3">!!!</option>
                                            </select>
                                        </div>
                                    </div>
                                    <label class="form-label" v-bind:for="'#' + item.id + ' desc'">Description</label>
                                    <input type="text" :id="item.id + ' desc'" class="form-control py-2" v-model="item.description">
                                    Steps:<br>
                                    <div v-for="step in item.steps">
                                        <input type="text" class="form-control" v-model="step[0]">
                                    </div>
                                    <div class="btn btn-outline-dark" @click="addStep(item)">+ Add Step</div>
                                    <div class="btn btn-outline-dark bg-danger-subtle" @click="removeStep(item)">- Remove Step</div>


                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Done</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="addnew" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add Assignment</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="row py-2">
                                        <div class="col">
                                            <input type="text" class="form-control" v-model="newAssign.name">
                                        </div>
                                        <div class="col">
                                            <select class="form-select" v-model="newAssign.priority">

                                                <option value="1">!</option>
                                                <option value="2">!!</option>
                                                <option value="3">!!!</option>
                                            </select>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control py-2" v-model="newAssign.description">


                                    Steps:<br>
                                    <div v-for="step in newAssign.steps">
                                        <input type="text" class="form-control" v-model="step[0]">
                                    </div>
                                    <div class="btn btn-outline-dark" @click="addStep(newAssign)">+ Add Step</div>
                                    <div class="btn btn-outline-dark bg-danger-subtle" @click="removeStep(newAssign)">- Remove Step</div>


                                </form>
                            </div>
                            <div class="modal-footer bg-light">
                                <button type="button" class="btn btn-" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary" @click="pushNew(newAssign)" data-bs-dismiss="modal">Done</button>
                            </div>
                        </div>
                    </div>
                </div>




            </li>
        </ul>
    `,

});