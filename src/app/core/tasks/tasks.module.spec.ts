import { TasksModule } from './tasks.module';

describe('TaskModule', () => {
  let taskModule: TasksModule;

  beforeEach(() => {
    taskModule = new TasksModule();
  });

  it('should create an instance', () => {
    expect(taskModule).toBeTruthy();
  });
});
