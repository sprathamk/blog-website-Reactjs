import React from 'react';
import content from './content';
import Articles from '../components/Articles';

const ArticleList = () => {
  return (
    <div className="mb-40">
      <h1 className="sm:text-4xl text2xl font-bold my-6 text-gray-900">
        Article List
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={content}/>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
