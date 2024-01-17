import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: 1,
            status: 'pending',
            title: 'Remove Button',
            description:
                'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            dateline: '2023-08-28',
            assignedTo: 'sushil',
            priority: 'hard',
        }
    ],
    userSpecificTasks: [],
};

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: 'pending', ...payload })
            }
            else {
                const lastElement = state.tasks.at(-1);
                state.tasks.push({ id: lastElement?.id + 1, status: 'pending', ...payload })
            }
        },
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter(item => item.id !== payload)
        },
        updateTask: (state, { payload }) => {
            const targetTask = state.tasks.find(task => task.id === payload.id);
            targetTask.status = payload.status;
        },
        userTasks: (state, { payload }) => {
            state.userSpecificTasks = state.tasks.filter((item) => item.assignedTo === payload)
        }
    }
})

export const { addTask, updateTask, removeTask, userTasks } = taskSlice.actions;
export default taskSlice.reducer;