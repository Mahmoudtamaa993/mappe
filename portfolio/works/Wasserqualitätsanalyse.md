---
title: WASSERANALYSE
thumbnail: "/upload/thumbnails/wasser0.png"
order: 2

---
# Wasseranalyse

<img :src="$withBase('/upload/wasser1.png')" style="  margin-left: auto;
margin-right: auto;max-width:1024px; display: block;">


<img :src="$withBase('/upload/wasser3.png')" style="  margin-left: auto;
margin-right: auto;max-width:1024px; display: block;"> 


Konzept und Idee
------------------
Mit diesem Projekt wollte ich mich mit der Funktionalität und dem Programmieren von Sensoren auseinandersetzen. Es geht mir außerdem darum, mich mit meinen technischen Skills auch für die Umwelt einsetzen zu können. Ich entschied mich also, ein Messgerät zu bauen, mit dem ich die relevanten Werte im Süßwasser untersuchen kann.

Durch etwas Recherche fand ich heraus, welche Faktoren im Wasser für das Überleben von Fischen notwendig sind. Verschmutzung durch Landwirtschaft oder Müll führen dazu, dass die Werte im Wasser sich verschlechtern, was zum Sterben der Fische führen kann. Neben PH-Wert und der elektrischen Leitfähigkeit gibt es natürlich sehr viele weitere Werte die hierbei eine Rolle spielen. Um mich mit der Funktionsweise vertraut zu machen, startete ich mit dieser Version.



Technischer Aufbau
-------------------
Das Messgerät kann über einen längeren Zeitraum die Wasserqualität analysieren und die Daten in Echtzeit übermitteln. Es werden folgende Werte gemessen: PH-Wert und elektrische Leitfähigkeit (conductivity). Es basiert auf Arduino, ist einfach weiterzuentwickeln und kann um weitere Sensoren und Module erweitert werden. Aktuell werden die Daten auf einer Mikro-SD-Karte gespeichert und können außerdem über Bluetooth auf das Smartphone gesendet werden. 


**Bauteile:**

Arduino Bluno  
PH Sensor  
Conductivity Sensor  
Analog Signal Isolator  
RTC module  
MicroSD card module   
MicroSD Memory

Code
----
Programmiersprache: C,C++

<img :src="$withBase('/upload/code.png')" style="  margin-left: auto;
margin-right: auto;max-width:1024px; display: block;"> 


