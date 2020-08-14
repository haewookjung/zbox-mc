import DefaultLayout from '../components/Pages/Layout/DefaultLayout.vue';
import NotFound from '../components/GeneralViews/NotFoundPage.vue';

const Organization = () => import('src/components/Pages/Views/Organization/Organization.vue');
const UserRegistration = () => import('src/components/Pages/Views/Organization/UserRegistration.vue');

const TaskList = () => import('src/components/Pages/Views/Task/TaskList.vue');
const TaskRegistration = () => import('src/components/Pages/Views/Task/TaskRegistration.vue');
const ScriptRegistration = () => import('src/components/Pages/Views/Task/ScriptRegistration.vue');

const PlayBookList = () => import('src/components/Pages/Views/PlayBook/PlayBookList.vue');
const PlayBookRegistration = () => import('src/components/Pages/Views/PlayBook/PlayBookRegistration.vue');

const TargetList = () => import('src/components/Pages/Views/Target/TargetList.vue');
const TargetView = () => import('src/components/Pages/Views/Target/TargetView.vue');

import Login from 'src/components/Pages/Views/Home/Login.vue';

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login
};

let tasks = {
  path: '/tasks',
  name: 'Tasks',
  component: DefaultLayout,
  children: [
    {
      path: 'list',
      name: 'TaskList',
      meta: {
        auth: true,
      },
      component: TaskList
    },
    {
      path: 'registration',
      name: "TaskRegistration",
      meta: {
        auth: true,
      },
      component: TaskRegistration
    },
    {
      path: ':uuid',
      name: "TaskEdit",
      meta: {
        auth: true,
      },
      component: TaskRegistration
    },
    {
      path: ':uuid/scripts/:scriptUuid',
      name: "ScriptRegistration",
      meta: {
        auth: true,
      },
      component: ScriptRegistration
    }
  ]
}

let targets = {
  path: '/targets',
  name: 'Targets',
  component: DefaultLayout,
  children: [
    {
      path: 'list',
      name: 'TargetList',
      meta: {
        auth: true,
      },
      component: TargetList
    },
    {
      path: 'registration',
      name: "TargetRegistration",
      meta: {
        auth: true,
      },
      component: TargetView
    },
    {
      path: ':uuid',
      name: "TargetView",
      meta: {
        auth: true,
      },
      component: TargetView
    },

  ]
}

let playbooks = {
  path: '/playbooks',
  name: 'PlayBooks',
  component: DefaultLayout,
  children: [
    {
      path: 'list',
      name: 'PlayBookList',
      meta: {
        auth: true,
      },
      component: PlayBookList
    },
    {
      path: 'registration',
      name: "PlayBookRegistration",
      meta: {
        auth: true,
      },
      component: PlayBookRegistration
    },
    {
      path: ':uuid',
      name: "PlayBookEdit",
      meta: {
        auth: true,
      },
      component: PlayBookRegistration
    },
  ]
}

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/organization',
    children: [
      {
        path: 'organization',
        name: 'Organization',
        meta: {
          auth: true,
        },
        component: Organization
      },
      {
        path: 'organization/registration',
        name: "UserRegistration",
        meta: {
          auth: true,
        },
        component: UserRegistration
      },
    ]
  },
  tasks,
  playbooks,
  targets,
  loginPage,
  {path: '*', component: NotFound}
];

export default routes