import moviepy.editor as mp
import os


def doIt(filename):
    audio = mp.AudioFileClip("snoop.mp3")
    video1 = mp.VideoFileClip(filename)
    final = video1.set_audio(audio)
    final.write_videofile(filename)

for filename in os.listdir('./'):
    f = os.path.join(filename)
    if os.path.isfile(f):
        if '.mp4' in f:
            print(f)
            doIt(f)
