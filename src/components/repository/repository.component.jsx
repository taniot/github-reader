import React from 'react';
import './repository.styles.scss';

const Repository = (repo) => {
  //console.log({ repo });
  const { name, shortDescriptionHTML, visibility, url, repositoryTopics } =
    repo;
  console.log(repositoryTopics.nodes);
  return (
    <div className='repository'>
      <div className='repo-header'>
        <h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={url}
            alt={name}
            title={name}
            itemProp='name codeRepository'
          >
            {name}
          </a>{' '}
          <span>{visibility}</span>
        </h3>
      </div>
      <div className='repo-info'>
        <div
          className='repo-description'
          dangerouslySetInnerHTML={{ __html: shortDescriptionHTML }}
        />
      </div>
      {repositoryTopics.totalCount > 0 && (
        <div className='repo-topics'>
          {repositoryTopics.nodes.map(({ topic, url }) => (
            <a className='topic-tag' href={url} key={topic.id}>
              {topic.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Repository;