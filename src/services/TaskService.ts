import { CreateTaskDTO } from "../@types/task/CreateTaskDTO";
import { UpdateTaskDTO } from "../@types/task/UpdateTaskDTO";
import { TaskRepository } from "../database/repositories/TaskRepository";

export class TaskService {
    private taskRepository: TaskRepository;

    constructor() {
        this.taskRepository = new TaskRepository();
    }

    async create({userId, title, description, flag}: CreateTaskDTO){
        if (!title.trim()) {
            throw new Error("O título da tarefa é obrigatório.");
        }

        return await this.taskRepository.create(
            userId,
            title,
            description,
            flag, 
        );
    }

    async findById(id: number) {
        const task = await this.taskRepository.findById(id);

        if (!task) {
            throw new Error("Tarefa não encontrada.");
        }

        return task;
    }

    async findAllByUser(userId: number) {
        return await this.taskRepository.findAllByUser(
            userId,
        );
    }

    async findCompletedByUser(userId: number) {
        return await this.taskRepository.findCompletedByUser(
            userId,
        );
    }

    async findPendingByUser(userId: number) {
        return await this.taskRepository.findPendingByUser(
            userId,
        );
    }

    async update({id, title, description, flag}: UpdateTaskDTO) {
        const task = await this.taskRepository.findById(
            id
        );

        if (!task) {
            throw new Error("Tarefa não encontrada.");
        }

        if (!title.trim()) {
            throw new Error("O título da tarefa é obrigatório.");
        }

        await this.taskRepository.update(
            id,
            title,
            description,
            flag,
        );
    }

    async toggleCompleted(id: number, completed: number) {
        await this.taskRepository.complete(
            id,
            completed,
        );
    }

    async delete(id: number) {
        const task = await this.taskRepository.findById(
            id
        );

        if (!task) {
            throw new Error("Tarefa não encontrada.");
        }

        await this.taskRepository.delete(id);
    }
}