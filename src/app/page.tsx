import CardVideo from '@/components/molecules/CardVideo';
import Category from '@/components/molecules/Category';
import HomeLayout from '@/components/templates/HomeLayout';
import { DATA_CONTENT } from '@/utils/content.data';

export default function Home() {
  return (
    <HomeLayout>
      <Category />
      <div className="grid grid-cols-3 gap-5 h-[89vh] overflow-y-scroll">
        {DATA_CONTENT.map((item) => {
          return (
            <CardVideo
              key={item.thumbnail}
              accountName={item.accountName}
              thumbnail={item.thumbnail}
              title={item.title}
            />
          );
        })}
      </div>
    </HomeLayout>
  );
}
