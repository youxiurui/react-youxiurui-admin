import Components from '@/views/Components'
import Tables from '@/views/Components/Tables'
import RoutineTable from '@/views/Components/Tables/RoutineTable'
import ConfigurableTable from '@/views/Components/Tables/ConfigurableTable'
import Forms from '@/views/Components/Forms'
import RoutineForm from '@/views/Components/Forms/RoutineForm'
import AuthManage from '@/views/AuthManage'
import MenuAuth from '@/views/AuthManage/MenuAuth'
import BtnAuth from '@/views/AuthManage/BtnAuth'
import Menu from '@/views/Menu'
import Setting from '@/views/Setting'

export default [
    {
        path: 'components',
        element: <Components />,
        meta: {
            pathName: "组件",
            icon: "icon-kaifazujian",
        },
        children: [
            {
                path: 'tables',
                element: <Tables />,
                meta: {
                    pathName: "表格",
                    icon: "icon-biaoge",
                },
                children: [
                    {
                        path: 'routineTable',
                        element: <RoutineTable />,
                        meta: {
                            pathName: "基础表格",
                            icon: "icon-biaoge",
                        },
                    },
                    {
                        path: 'configurableTable',
                        element: <ConfigurableTable />,
                        meta: {
                            pathName: "可配置表格",
                            icon: "icon-biaoge",
                        },
                    },
                ]
            },
            {
                path: 'forms',
                element: <Forms />,
                meta: {
                    pathName: "表单",
                    icon: "icon-biaodan",
                },
                children: [
                    {
                        path: 'routineForm',
                        element: <RoutineForm />,
                        meta: {
                            pathName: "基础表单",
                            icon: "icon-biaodan",
                        },
                    }
                ]
            },
        ]
    },
    {
        path: 'authManage',
        element: <AuthManage />,
        meta: {
            pathName: "权限管理",
            icon: "icon-quanxian",
        },
        children: [
            {
                path: 'btnAuth',
                element: <BtnAuth />,
                meta: {
                    pathName: "按钮权限",
                    icon: "icon-anniu",
                },
            },
            {
                path: 'menuAuth',
                element: <MenuAuth />,
                meta: {
                    pathName: "菜单权限",
                    icon: "icon-anniu",
                },
            },
        ]
    },
    {
        path: 'setting',
        element: <Setting />,
        meta: {
            pathName: "系统配置",
            icon: "icon-shezhipeizhi",
        },
    },
    {
        path: 'menu',
        element: <Menu />,
        meta: {
            pathName: "菜单管理",
            icon: "icon-caidan1",
        },
    },
]