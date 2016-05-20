import UIKit
import MediaPlayer
import AVFoundation

let base = "http://nu.drdinstem.me/"

class ViewController: UIViewController, UIWebViewDelegate {

    @IBOutlet var webView: UIWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        reloadWebSite()
        
        let cc = MPRemoteCommandCenter.sharedCommandCenter()
        cc.playCommand.addTarget(self, action: Selector("play"))
        cc.pauseCommand.addTarget(self, action: Selector("pause"))
        cc.nextTrackCommand.addTarget(self, action: Selector("nextTrack"))
        cc.previousTrackCommand.addTarget(self, action: Selector("previousTrack"))
        
        let audioSession = AVAudioSession.sharedInstance()
        try! audioSession.setCategory(AVAudioSessionCategoryPlayback)
    }
    
    override func viewDidAppear(animated: Bool) {
        super.viewDidAppear(animated)
        self.becomeFirstResponder()
    }
    
    override func canBecomeFirstResponder() -> Bool {
        return true
    }
    
    override func motionEnded(motion: UIEventSubtype, withEvent event: UIEvent?) {
        if motion == UIEventSubtype.MotionShake {
            self.webView.reload()
        }
    }
    
    // Public
    
    func reloadWebSite() {
        let req = NSURLRequest(URL: (NSURL(string: base)!))
        self.webView.loadRequest(req)
    }
    
    // Media callbacks
    
    func play() {
        print(evalFn("play"))
    }
    
    func pause() {
        print(evalFn("pause"))
    }
    
    func nextTrack() {
        print(evalFn("next"))
    }
 
    func previousTrack() {
        print(evalFn("prev"))
    }

    private func evalFn(fn: String) -> String? {
        return self.webView.stringByEvaluatingJavaScriptFromString("Controls.\(fn)()")
    }
    
    // UIWebViewDelegate
    
    func webViewDidStartLoad(webView: UIWebView) {
    }
    
    func webViewDidFinishLoad(webView: UIWebView) {
    }
    
    func webView(webView: UIWebView, didFailLoadWithError error: NSError?) {
        print(error)
    }
}

