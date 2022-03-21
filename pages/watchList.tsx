import { useEffect, useState } from 'react';
import Poster from '../components/Poster';
import { getWatchList } from '../services';
import { WatchList } from '../types';
import ActiveLink from '../components/ActiveLink';
import styles from '../styles/SearchItem.module.scss';

export default function WatchListPage() {
  const [watchList, setWatchList] = useState<WatchList>({});

  useEffect(() => {
    const watchList = getWatchList();
    setWatchList(watchList);
  }, []);

  return (
    <section>
      <h1>Watchlist</h1>
      <ul>
        {Object.keys(watchList).map((key) => (
          <li key={key} className={styles.container}>
            <ActiveLink href={`/${key}`}>
              <Poster
                src={watchList[key].image}
                alt={watchList[key].title}
                width={100}
                height={100}
                style={{ maxWidth: '100px' }}
              ></Poster>
              <div>
                <h2 className={styles.title}>{watchList[key].title}</h2>
              </div>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
