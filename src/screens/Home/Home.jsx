import React from "react";
import HomeVideo from "@Assets/videos/connections.mp4";

import * as s from "./Home.style";
import Button from "@Components/Button/Button";
import {PageHeader} from "@Layout/Page/Page.style";

const Home = () => {

    return (
        <s.HomeContainer>
            <s.HomeVideo>
                <video src={HomeVideo} width="100%" controls={false} autoPlay={true} loop={true} muted={true}></video>
                <s.VideoOverlay initial={{y:"-300px", opacity:0}} animate={{y:0, opacity:1, transform:"translate(-50%,0)"}} transition={{duration:0.8, delay:0.3, ease: [0, 0.71, 0.2, 1.01]}}>
                    <s.VideoOverlayText>
                        Building healthier communities through enabling technologies.
                    </s.VideoOverlayText>
                    <Button placeholder={"Learn More"} name={"Learn-More"} id={"learn-more"} />
                </s.VideoOverlay>
            </s.HomeVideo>
            <s.HomeContent>
                <PageHeader>Home Page</PageHeader>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis sapien tortor, a porttitor massa iaculis ut. Suspendisse scelerisque elementum rhoncus. Sed vestibulum vitae augue quis varius. Donec id eleifend libero. Mauris ut diam sem. Mauris sit amet sem at metus elementum iaculis. Mauris eleifend dapibus scelerisque. Nunc vitae arcu tempor enim imperdiet laoreet.
                In vitae imperdiet felis. Cras id lobortis mi. Quisque ultricies pharetra pretium. Quisque auctor ante id lorem faucibus, in commodo nibh posuere. Aliquam erat volutpat. Nullam eget nunc est. Curabitur sed neque posuere, tincidunt purus sit amet, tristique arcu. Sed semper purus nibh, et pellentesque diam aliquam ut. Pellentesque ante neque, varius ac interdum at, molestie eget purus. Proin dapibus egestas luctus. Nam euismod varius orci, vitae imperdiet orci dignissim in. Suspendisse pulvinar commodo augue ac dignissim. Proin iaculis, lacus ac accumsan interdum, ante orci efficitur purus, nec commodo enim nibh eu nulla. Fusce sit amet fermentum orci, in vestibulum est. Aliquam mattis risus in ex ullamcorper, vitae tincidunt metus pharetra.
                Donec vel eros ac libero fringilla porttitor vitae sit amet ante. Fusce et mi ut libero efficitur efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi hendrerit ornare orci, et malesuada erat tempor at. Ut eros ipsum, faucibus faucibus maximus at, vehicula a nulla. Suspendisse facilisis mattis ligula. In et turpis pharetra, iaculis velit a, varius libero. Integer posuere ornare mi, et hendrerit orci finibus quis. Cras sagittis magna lorem, quis tempus sem malesuada eu. Duis venenatis bibendum ex, non ultricies nulla vestibulum condimentum. Aenean lobortis pharetra dignissim. Mauris viverra ipsum nisl, sed imperdiet lacus bibendum vel. Nunc nunc massa, porta ut varius nec, porttitor vitae massa.
                </div>
            </s.HomeContent>
        </s.HomeContainer>
    );
};

export default Home;
