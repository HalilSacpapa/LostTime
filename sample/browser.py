from PyQt5.QtCore import *
from PyQt5.QtWidgets import *
from PyQt5.QtGui import *
from PyQt5.QtWebEngineWidgets import *
import sys
from subprocess import Popen

class MainWindow(QMainWindow):

    def __init__(self, *args, **kwargs):
        super(MainWindow,self).__init__(*args, **kwargs)

        self.browser = QWebEngineView()
        self.browser.setUrl(QUrl("http://localhost:4123"))

        self.setCentralWidget(self.browser)
        self.show()

p = Popen(["npm", "start", "--prefix", "/lost-time"])
app = QApplication(sys.argv)
window = MainWindow()
app.exec_()
p.terminate()