import React, { useRef, useEffect, useState } from 'react';
import { Box, extendTheme, Flex } from '@chakra-ui/react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ScoresBoard } from './scoreBoardCalculator';
const theme = extendTheme({});

export const SpinGame = ({isChecked}) => {
    // useRef : persistently store a mutable value that does not cause a re-render when updated
    const mountRef = useRef(null);
    const [speed, setSpeed] = useState(0);
    const [mph, setMph] = useState(0);  //state variable to hold mph
    const [phoneModel, setPhoneModel] = useState("");
    const [isMouseDisabled, setIsMouseDisabled] = useState(false);
    const mouseHoldTimeout = useRef(null);
    const mouseDisabledTimeout = useRef(null);
    const phoneLength = 6;  // phone length 6 inches
    const radius = phoneLength * 0.5;  // top left corner of the phone is at a distance equal to radius of phone
    let isMouseDown = false;
    let lastMouseX = null;
    let lastMouseY = null;
    let speedX = 0;
    let speedY = 0;
    let iPhoneModel;

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Enable alpha (transparency)
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);
        renderer.setClearColor(0x000000, 0); // Set clear color with 0 alpha (fully transparent)

        // Ambinent Light
        const ambientLight = new THREE.AmbientLight(0xffffff, 2.0); // white light with intensity of 2
        scene.add(ambientLight);

        // Hemisphere Light
        const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 5); // with intensity of 5
        scene.add(hemisphereLight);

        // Directional Lights
        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight1.position.set(7, -7, 5);
        scene.add(directionalLight1);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight2.position.set(-7, 7, 5);
        scene.add(directionalLight2);

        const directionalLight3 = new THREE.DirectionalLight(0xffffff, 20);
        directionalLight3.position.copy(camera.position); // this will copy the position of the camera
        directionalLight3.position.y -= 1;  // move light down by 2 units along the y-axis
        scene.add(directionalLight3);

        const directionalLight4 = new THREE.DirectionalLight(0xffffff, 20);
        directionalLight4.position.copy(camera.position); // this will copy the position of the camera
        directionalLight4.position.y += 1;  // move light down by 2 units along the y-axis
        scene.add(directionalLight4);
        
        // Point Lights
        const pointLight1 = new THREE.PointLight(0xffffff, 3.0); // white light with intensity of 3.0
        pointLight1.position.set(2, 3, 2);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 3.0);
        pointLight2.position.set(-2, -2, -2);
        scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0xffffff, 3.0);
        pointLight3.position.set(2, -2, 2);
        scene.add(pointLight3);

        const pointLight4 = new THREE.PointLight(0xffffff, 3.0);
        pointLight4.position.set(-2, 2, -2);
        scene.add(pointLight4);

    ///////////end of lighting/////////////////
    /// COntroling scale of the phone for responsivness
    const adjustCameraForResponsiveZoom = () => {
        const viewportWidth = window.innerWidth;
    
        if (viewportWidth < 600) { // for small devices
            camera.fov = 55;
        } else if (viewportWidth < 900) { // for medium devices
            camera.fov = 45;
        } else { // for large devices
            camera.fov = 35;
        }

        camera.updateProjectionMatrix();
    };
    
    // Set initial canvas size
    const setCanvasSize = () => {
        //mountRef holds a reference to the DOM element that will be the container for the Three.js rendering typically a div  
        const width = mountRef.current.clientWidth;
        // clientWidth and clientHeight of the mountRef current value, refers to the size of the Box component
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height);  // The parameters that dictate the canvas size are derived from the dimensions of the Box component,
        camera.aspect = width / height;
        camera.updateProjectionMatrix(); // updates the camera's projection matrix when aspect ration is changed
    };

    // Resize event listener
    const onResize = () => {
        setCanvasSize();
        adjustCameraForResponsiveZoom();
    };

        setCanvasSize();
        adjustCameraForResponsiveZoom();
        window.addEventListener('resize', onResize);

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            onResize()
        });

        // Load the iPhone model
        const loader = new GLTFLoader();
        let iPhoneModel;
        let modelPath;
        switch (phoneModel) {
            
            case "Google_Pixel6":
                modelPath = "/Google_Pixel6.glb";
                break;
            case "SamsungS22_Ultra5G":
                modelPath = "/SamsungS22_Ultra5G.glb";
                break;
            // Add more cases as needed
            default:
                modelPath = "/iPhone15_proMax.glb";
        }
        
        loader.load(
            modelPath, // path to your GLB file
            (gltf) => {
                iPhoneModel = gltf.scene;
                iPhoneModel.scale.set(2, 2, 2); // scale 
                scene.add(iPhoneModel);
                iPhoneModel.position.set(0, 0, 4);

                // Set initial rotation
                const radians = THREE.MathUtils.degToRad(135);
                iPhoneModel.rotation.y = radians;

            },
            undefined,
            (error) => {
                console.error('An error happened', error);
            }
        );

        camera.position.z = 5;

        function onMouseDown(event) {
            if (!isMouseDisabled) {
              isMouseDown = true;
              lastMouseX = event.clientX;
              lastMouseY = event.clientY;
            
              // disable the mousedown after 3 seconds
              mouseHoldTimeout.current = setTimeout(() => {
                isMouseDown = false;
                setIsMouseDisabled(true);
                // re-enable mousedown after 1.5 seconds
                mouseDisabledTimeout.current = setTimeout(() => {
                  setIsMouseDisabled(false);
                }, 1500);
              }, 1500);
            }
          }
          
          function onMouseUp() {
            isMouseDown = false;
            clearTimeout(mouseHoldTimeout.current);
            clearTimeout(mouseDisabledTimeout.current);
            setIsMouseDisabled(false);
          }        

    function onDocumentMouseMove(event) {
            if (isMouseDown && iPhoneModel) {
               const deltaX = event.clientX - lastMouseX;
               const deltaY = event.clientY - lastMouseY;
               speedX = deltaX * 0.15; // save to speedX
               speedY = deltaY * 0.15; // save to speedY
               iPhoneModel.rotation.y += speedX;
               iPhoneModel.rotation.x += speedY;
               lastMouseX = event.clientX;
               lastMouseY = event.clientY;
           }
         }

        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onDocumentMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);
        // apply air resistance
            if(!isMouseDown) {
                const dragCoefficient = 0.01; // adjust higher for more wind resistance
                speedX -= dragCoefficient * speedX;
                speedY -= dragCoefficient * speedY;
            }
            if (iPhoneModel) {
                iPhoneModel.rotation.y += speedX;
                iPhoneModel.rotation.x += speedY;
        
                calculateSpeed(speedX, setMph);
            }
            renderer.render(scene, camera);
        
            // calculate active spinning speed
            setSpeed(Math.sqrt(speedX * speedX + speedY * speedY));
        };

        animate();

        return () => {
            // Cleanup
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', adjustCameraForResponsiveZoom);
            window.removeEventListener('resize', onResize);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            clearTimeout(mouseHoldTimeout.current);
            clearTimeout(mouseDisabledTimeout.current);
          };

    }, [phoneModel]); // end useEffect



    // Function to calculate speed 
    const calculateSpeed = (speed, setMph) => {
        const absSpeed = Math.abs(speed); // use absolute value of speed
        const angularSpeedRPM = absSpeed * (60 / (2 * Math.PI));  // Convert rad/s to RPM
        const distancePerRevolution = 2 * Math.PI * radius;  // Circumference of the circle covered by the corner of phone
        const linearSpeedInchesPerMinute = angularSpeedRPM * distancePerRevolution;  // Calculate the linear speed in inch/min
        const linearSpeedMPH = linearSpeedInchesPerMinute * 60 / (12*5280);  // Convert in/min to miles/hr
        setMph(linearSpeedMPH);
      }
      
    return (
        <Flex direction="row"  justifyContent="flex-start" alignItems="center">
        <Box 
        as="main" 
        ref={mountRef}
        height={{ base: "20vh", sm: "20vh", md: "20vh", lg: "20vh", xl: "20vh" }} 
        width={{ base: "10vw", sm: "10vw", md: "10vw", lg: "15vw", xl: "15vw" }}  />
      <ScoresBoard mr={5} speed={speed} mph={mph} phoneModel={phoneModel} setPhoneModel={setPhoneModel} isChecked={isChecked}/> 
    </Flex >
    );
 }


