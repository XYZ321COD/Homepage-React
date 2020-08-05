import React from "react";
import "../css/Building.css";

export default function MnistPost() {
  return (
    <div class="container">
      <div class="row home2">
        <div class="col-md-1" />
        <div class="home col-md-12 ">
          <div class="row" />
          <div class=" col nice-text "> m @ z</div>
          <div class=" col under-line "></div>
          <div class="col column-left">
            <div class="text_title">
              {" "}
              Real-time digit recognition in the browser{" "}
            </div>
            <div>
              This post will cover frameworks(OnnxJS, PyTorch, React) that I
              used to create a project "Real-time digit recognition in the
              browser" and how they can help you with deploying deep learning
              solutions to the web browser.
              <div class="text_title">
                {" "}
                Machine learning and deep learning in the browser
              </div>
              <div>
                Most popular JavaScript-based deep learning frameworks are
                TensorFlowJS, ConvnetJS, BrainJS. All of them allow you to train
                and also inference the model. But what if you care about
                flexibility? What if you want to use the library which would
                allow you to load a pre-trained model from every mainstream
                framework? In my project instead of using TensorFlowJS,
                ConvnetJS or BrainJS I've decided to use OnnxJS. With OnnxJS you
                can convert models from PyTorch, TensorFlow, Caffe and more to
                OnnxJS format and then use your pre-trained model to inference
                in the browser.
              </div>
            </div>
            <div class="text_title"> What is ONXX? </div>
            <div>
              In the current state of deep learning, we have disconnections
              between training the model and deploying the model in production.
              When deploying the model to certain architecture we must make sure
              that we are using hardware to the fullest. ONXX takes your trained
              model and makes sure that your model will be working for the
              specific target deployment such as FPGA, mobile devices or web
              browser. OnnxJS is part of Onxx which deploys models to the web
              browsers.
            </div>
            <div class="text_title"> What is PyTorch?</div>
            <div>
              PyTorch is an open-source machine learning library based on the
              Torch library used for applications such as computer vision and
              natural language processing primarily developed by Facebook. In
              this project I used PyTorch to create and later train the model to
              recognize handwritten digits.
            </div>
            <div class="text_title"> What is React?</div>
            <div>
              React is a declarative, efficient, and flexible JavaScript library
              for building user interfaces. I used React in this project to
              create user interface for my web application.
            </div>
            <div class="text_title"> Link to project</div>
            <div>
              <a href="https://compassionate-jepsen-ac13f3.netlify.app/">
                {" "}
                Link{" "}
              </a>
            </div>
            <div class="text_title"> References</div>
            <div>
              <a href="https://github.com/XYZ321COD/MnistPyTorchJS">
                {" "}
                Github Repository{" "}
              </a>
            </div>
            <div>
              <a href="https://pytorch.org/"> PyTorch </a>
            </div>
            <div>
              <a href="https://onnx.ai/"> Onnx </a>
            </div>
            <div>
              <a href="https://reactjs.org/"> React </a>
            </div>
            <div class=" col under-line "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
