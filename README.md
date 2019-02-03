# carVision

Made for [MakeHarvard 2019](https://makeharvard2019.devpost.com)

![alt text](https://github.com/ndh175/car-vision/raw/master/Screen%20Shot%202019-02-03%20at%2011.01.03%20AM.png)

# Inspiration

We were interested in working with machine learning, image recognition, augmented reality, and automobile saftey. We decided on developing carVision in an effort to combine all four.   

# What is does

carVision is a mobile application that aims to bring modern saftey features to older model vehicles in an accessiable fashion.

# How we built it

The mobile application is built on react native with a plugin enabling us to create a RTMP livestream from the device. This framework allows our application to be platform agnostic, and run on both iOS and android from the same source code. The backend is running Yolo in conjunction with Tensorflow and OpenCV.

# Challenges we ran into

We were unable to interface our RTMP livestream with AWS Kinesis which we were then planning to integrate with our machine learning running on the cloud. We also had issues setting up react native for android on windows laptops.


# Accomplishments we're proud of

We're proud of figuring out how to get react native running ios/andoroid on both mac/windows. We're also proud of the neural network we set up and the generation of a livestream form react native.

# What we learned

We all learned a lot about livestreaming protocals, react native setup and troubleshooting, and machine learning.

# Future

This was intiially concieved as a proof of concept for technology that could eventually be implemented into a heads up display (HUD) on a windshield of a vehicle. This would also be useful as a standalone application.

## Authors

* **Nicholas Holbrook** - *iOS / Backend Development* - [ndh175](https://github.com/ndh175)
* **Hannah Carver** - *Machine Learning*
* **Paul Sun** - *Android / React Native Development*
* **Jiexun Xu** - *Android / React Native Development*
