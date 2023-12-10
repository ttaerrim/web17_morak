import { useQuery } from '@tanstack/react-query';

import { Button, Error, LoadingIndicator, MogacoItem } from '@/components';
import { queryKeys } from '@/queries';
import { vars } from '@/styles';
import { sansBold24 } from '@/styles/font.css';

import * as styles from './index.css';

export function MyMogaco() {
  const {
    data: mogacoList,
    isLoading,
    isError,
  } = useQuery(queryKeys.mogaco.myMogaco());

  return (
    <section className={styles.section}>
      <div className={sansBold24}>현재 참가한 모각코</div>
      <ul className={styles.list}>
        {isLoading && (
          <LoadingIndicator
            color={vars.color.grayscale500}
            size={30}
            className={styles.loading}
          />
        )}
        {isError && (
          <Error message="참여한 모각코 정보를 불러오지 못했습니다." />
        )}
        {mogacoList &&
          (mogacoList.length > 0 ? (
            mogacoList.map(
              ({ id, status, title, group, contents, address, date }) => (
                <MogacoItem
                  key={id}
                  id={id}
                  status={status}
                  title={title}
                  group={group}
                  contents={contents}
                  address={address}
                  date={date}
                />
              ),
            )
          ) : (
            <div className={styles.notParticipated}>
              <span>참여한 모각코가 없습니다. 참여해 보세요!</span>
              <Button theme="primary" shape="text" size="large">
                바로가기
              </Button>
            </div>
          ))}
      </ul>
    </section>
  );
}
