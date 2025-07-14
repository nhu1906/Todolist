import { Header,Navigation,Link, Button, HeaderNavigationItem} from '@bosch/react-frok';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

const FrokHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.headerWrapper}>
      <Header
        menu={
          <Navigation
            languageSelector={
              <select className={styles.languageSelect} defaultValue="en">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
              </select>
            }
          >
            <HeaderNavigationItem trigger={<Button label="Company" />}>
              <Link label="About" />
              <Link label="Team" />
            </HeaderNavigationItem>
          </Navigation>
        }
        menuTrigger="Menu"
        quickLinks={[
          {
            icon: 'logout', label: 'Logout', onClick: () => { navigate('/login') }
          }
        ]}
        searchForm={{
          onChange: () => { }, onSubmit: () => { }, searchField: { id: 'searchFieldId' }
        }}
        searchTrigger="Search"
        suggestions={[]}
      />
    </div>
  );
};

export default FrokHeader;
