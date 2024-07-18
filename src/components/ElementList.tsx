import { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useAppSelector } from '../store/configureStore';
import '../elements.css';

const ElementList: React.FC = () => {
  const elements = useAppSelector((state) => state.elements.elements);
  const ref = useRef(null);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '20vw' }}>
      <TransitionGroup className="wrapper relative flex h-20">
        {elements.map((element, index) => (
          <CSSTransition
            key={element.id}
            timeout={500}
            classNames="my-node"
            ref={ref}
          >
            <div
              style={{
                '--h': `${index * 100}%`,
                '--w': `${index * 200}%`,
                backgroundColor: element.color,
                transform: `translateX(${index * 100}%)`,
              }}
              className="my-node-move h-full w-1/5 text-white"
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ElementList;
