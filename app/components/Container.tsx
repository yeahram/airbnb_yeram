"use client"; //클라이언트 컴포넌트를 쓸때 사용

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  //React.FC는 함수형일때 사용하는 typescript
  return (
    <div
      className="
    max-w-[2520px] 
    mx-auto 
    xl:px-20 
    md:px-10 
    sm:px-4"
    >
      {children}
    </div>
  );
};
export default Container;
