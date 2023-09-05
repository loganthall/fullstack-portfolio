import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import { MdArrowCircleRight, MdArrowCircleDown } from 'react-icons/md';
import styles from '../styles/modules/todoItem.module.scss';

const checkVariants = {
    initial: {
        color: '#fff',
    },
    checked: { pathLength: 1 },
    unchecked: { pathLength: 0 },
};

const boxVariants = {
    checked: {
        background: 'var(--primaryBlue)',
        transition: { duration: 0.1 },
    },
    unchecked: { background: 'var(--gray-2)', transition: { duration: 0.1 } },
};

const BreakoutArrow = ({ visible, handleBreakout }) => {
    const pathLength = useMotionValue(0);

    return (
        <>
            <div>
                {visible ? (
                    <div>
                        <MdArrowCircleDown size={'3rem'} color={'#646681'} onClick={() => handleBreakout()} />
                    </div>
                ) : (
                    <div>
                        <MdArrowCircleRight size={'3rem'} color={'#dedfe1'} onClick={() => handleBreakout()} />
                    </div>
                )}
            </div>
        </>
    );

    // return (
    //     <>
    //         <motion.div
    //             animate={visible ? <MdArrowCircleDown size={'3rem'} onClick={() => handleBreakout()} /> : <MdArrowCircleRight size={'3rem'} onClick={() => handleBreakout()} />}
    //             className={styles.svgBox}
    //             variants={boxVariants}
    //             onClick={() => handleCheck()}
    //         >
    //             <motion.svg
    //                 className={styles.svg}
    //                 viewBox="0 0 53 38"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //             >
    //                 <motion.path
    //                     variants={checkVariants}
    //                     animate={visible ? <MdArrowCircleDown size={'3rem'} onClick={() => handleBreakout()} /> : <MdArrowCircleRight size={'3rem'} onClick={() => handleBreakout()} />}
    //                     style={{ pathLength }}
    //                     fill="none"
    //                     strokeMiterlimit="10"
    //                     strokeWidth="6"
    //                     d="M1.5 22L16 36.5L51.5 1"
    //                     strokeLinejoin="round"
    //                     strokeLinecap="round"
    //                 />
    //             </motion.svg>
    //         </motion.div>
    //     </>
    // );
};

export default BreakoutArrow;
