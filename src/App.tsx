
import { Admin, Resource} from 'react-admin';
import { dataProvider } from './dataProvider';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
    >
    </Admin>
);

