import ContentLoader from 'react-content-loader';

export default function CategoryItemLoader({ size }) {
  if (size == 'small') {
    return (
      <ContentLoader
        height={120}
        width={100}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="0" y="0" rx="4" ry="4" width="100" height="100" />
        <rect x="0" y="108" rx="3" ry="3" width="80" height="12" />
      </ContentLoader>
    );
  }

  if (size == 'medium') {
    return (
      <ContentLoader
        height={170}
        width={150}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="0" y="0" rx="3" ry="3" width="150" height="150" />
        <rect x="0" y="158" rx="3" ry="3" width="380" height="12" />
      </ContentLoader>
    );
  }

  return (
    <ContentLoader
      height={350}
      width={280}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" width="280" height="280" />
      <rect x="0" y="290" rx="3" ry="3" width="270" height="16" />
      <rect x="0" y="315" rx="3" ry="3" width="120" height="16" />
      <rect x="130" y="315" rx="3" ry="3" width="120" height="16" />
    </ContentLoader>
  );
}
