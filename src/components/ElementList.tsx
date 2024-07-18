import { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useAppSelector } from '../store/configureStore';
import '../elements.css';

const ElementList: React.FC = () => {
  const elements = useAppSelector((state) => state.elements.elements);
  const ref = useRef(null);

  return (
    <div className="mt-4 flex space-x-2">
      <TransitionGroup className="flex h-screen w-screen">
        {elements.map((element) => (
          <CSSTransition
            key={element.id}
            timeout={500}
            classNames="my-node"
            ref={ref}
          >
            <div
              style={{
                backgroundColor: element.color,
                width: '20%',
                height: '20%',
              }}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ElementList;
