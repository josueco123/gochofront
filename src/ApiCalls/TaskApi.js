import axios from "axios";

const ENDPOINT_PATH = "http://localhost:8000/";

const getMyTask = (id) => {

    return axios.get(ENDPOINT_PATH + 'tareas/consultar/' + id );
};

const getPendingTasks = (id) => {

    return axios.get(ENDPOINT_PATH + 'tareas/consultar/pendientes/' + id );
};

const getFinishedTasks = (id) => {

    return axios.get(ENDPOINT_PATH + 'tareas/consultar/finalizadas/' + id);
};

const getTasksByDue = (id) => {

    return axios.get(ENDPOINT_PATH + 'tareas/consultar/fecha/' + id);
};

const updateTask = (task) => {

    return axios.post(ENDPOINT_PATH + 'tareas/actualizar', task);
};

const deleteTask = (task) => {

    return axios.post(ENDPOINT_PATH + 'tareas/borrar', task);
};

const createTask = (task) => {

    return axios.post(ENDPOINT_PATH + 'tareas/crear', task);
};

const completeTask = (task) => {

    return axios.post(ENDPOINT_PATH + 'tareas/completar', task);
};

export default {
    completeTask,
    createTask,
    deleteTask,
    updateTask,
    getTasksByDue,    
    getFinishedTasks,
    getPendingTasks,
    getMyTask
};