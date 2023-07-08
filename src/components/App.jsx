import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

import { Layout } from './LayoutComponent/Layout';
import { AppBar } from './AppBarComponent/AppBar';
import { TaskForm } from './TaskFormComponent/TaskForm';
import { TaskList } from './TaskListComponent/TaskList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};
